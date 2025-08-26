// app/dashboard/page.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import SidebarClient from "@/components/ui/SidebarClient";

export const dynamic = "force-dynamic";

type Account = {
  id: string;
  name: string;
  type: string;
  currency: string;
  balance: number;
  available_balance?: number | null;
  number_last4?: string | null;
  last_updated?: string | null;
};

type Transaction = {
  id: string;
  posted_at: string;
  amount: number;
  currency: string;
  description: string;
  category?: string | null;
  account_id?: string | null;
};

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/security?redirectedFrom=/dashboard");
  const user = session.user;

  // --- Fetch data (same as before; adjust table names if needed)
  const { data: accountsData } = await supabase
    .from("accounts")
    .select(
      "id,name,type,currency,balance,available_balance,number_last4,last_updated"
    )
    .eq("user_id", user.id)
    .order("balance", { ascending: false })
    .limit(5);

  const { data: txData } = await supabase
    .from("transactions")
    .select("id,posted_at,amount,currency,description,category,account_id")
    .eq("user_id", user.id)
    .order("posted_at", { ascending: false })
    .limit(10);

  // Fallback demo data if empty (optional)
  const accounts: Account[] = accountsData?.length
    ? (accountsData as Account[])
    : [
        {
          id: "demo1",
          name: "HSBC Current Account",
          type: "Current",
          currency: "GBP",
          balance: 2450.13,
          available_balance: 2300.13,
          number_last4: "1234",
          last_updated: new Date().toISOString(),
        },
        {
          id: "demo2",
          name: "Everyday Savings",
          type: "Savings",
          currency: "GBP",
          balance: 10890.0,
          available_balance: 10890.0,
          number_last4: "9876",
          last_updated: new Date().toISOString(),
        },
      ];

  const txns: Transaction[] = txData?.length
    ? (txData as Transaction[])
    : [
        {
          id: "t1",
          posted_at: new Date().toISOString(),
          amount: 42.5,
          currency: "GBP",
          description: "Tesco Groceries",
          category: "Groceries",
          account_id: "demo1",
        },
        {
          id: "t2",
          posted_at: new Date(Date.now() - 864e5).toISOString(),
          amount: 12.99,
          currency: "GBP",
          description: "Spotify",
          category: "Entertainment",
          account_id: "demo1",
        },
        {
          id: "t3",
          posted_at: new Date(Date.now() - 2 * 864e5).toISOString(),
          amount: -1500,
          currency: "GBP",
          description: "Salary",
          category: "Income",
          account_id: "demo1",
        },
      ];

  // Spending summary (last 30 days)
  const since = new Date();
  since.setDate(since.getDate() - 30);

  const { data: last30 } = await supabase
    .from("transactions")
    .select("amount,category,posted_at")
    .eq("user_id", user.id)
    .gte("posted_at", since.toISOString());

  const spendMap = new Map<string, number>();
  let totalSpend = 0;
  (last30 ?? []).forEach((t) => {
    const amt = Number(t.amount) || 0;
    if (amt < 0) return; // ignore income/refunds
    const cat = t.category ?? "Other";
    spendMap.set(cat, (spendMap.get(cat) ?? 0) + amt);
    totalSpend += amt;
  });
  const sorted = Array.from(spendMap.entries()).sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 5);
  const other = sorted.slice(5).reduce((s, [, v]) => s + v, 0);
  if (other > 0) top.push(["Other", other]);

  const ccy = accounts[0]?.currency ?? "GBP";
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: ccy }).format(
      n
    );

  // Donut
  const R = 48;
  const C = 2 * Math.PI * R;
  let acc = 0;
  const segments =
    totalSpend > 0
      ? top.map(([label, value]) => {
          const pct = value / totalSpend;
          const dash = C * pct;
          const gap = C - dash;
          const offset = (acc / totalSpend) * C || 0;
          acc += value;
          const palette = [
            "#db0011",
            "#0b3a75",
            "#6b7280",
            "#059669",
            "#d97706",
            "#7c3aed",
          ];
          const color =
            palette[top.findIndex((x) => x[0] === label) % palette.length];
          return { label, value, dash, gap, offset, color };
        })
      : [
          {
            label: "No data",
            value: 1,
            dash: C,
            gap: 0,
            offset: 0,
            color: "#e5e7eb",
          },
        ];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="md:flex md:items-start md:gap-6">
        {/* Sidebar (client) */}
        <SidebarClient userEmail={user.email} />

        {/* Main content */}
        <main className="flex-1">
          {/* Header + quick actions */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1
                className="text-2xl sm:text-3xl font-semibold text-[#1f2937]"
                style={{
                  fontFamily:
                    '"HSBC Sans","Helvetica Neue",Helvetica,Arial,ui-sans-serif,system-ui',
                }}
              >
                Welcome back
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Signed in as <b className="text-gray-800">{user.email}</b>
              </p>
            </div>
            <div className="hidden md:flex flex-wrap gap-2">
              <Link
                href="/transfer"
                className="rounded bg-[#db0011] px-4 py-2 text-white text-sm font-medium hover:opacity-90"
              >
                Transfer money
              </Link>
              <Link
                href="/payments/pay-bill"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                Pay a bill
              </Link>
              <Link
                href="/payments/add-payee"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                Add payee
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Accounts */}
            <section className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4">
                  <h2 className="text-base font-semibold text-gray-800">
                    Your accounts
                  </h2>
                </div>
                <ul className="divide-y divide-gray-100">
                  {accounts.map((a) => (
                    <li
                      key={a.id}
                      className="px-5 py-4 flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="text-sm text-gray-500">
                          {a.type} · {a.name}
                          {a.number_last4 ? ` · ••••${a.number_last4}` : ""}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {fmt(a.balance)}
                        </p>
                        {a.available_balance != null && (
                          <p className="text-xs text-gray-500">
                            Available {fmt(a.available_balance)}
                            {a.last_updated ? (
                              <>
                                {" "}
                                · Updated{" "}
                                {new Date(a.last_updated).toLocaleString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </>
                            ) : null}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        <Link
                          href={`/accounts/${a.id}`}
                          className="text-sm font-medium text-[#0b3a75] underline underline-offset-2 hover:text-black"
                        >
                          View details
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Spending summary */}
            <section className="lg:col-span-1">
              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4">
                  <h2 className="text-base font-semibold text-gray-800">
                    Spending (last 30 days)
                  </h2>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-6">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      className="shrink-0"
                    >
                      <g transform="translate(60,60) rotate(-90)">
                        <circle
                          cx="0"
                          cy="0"
                          r="48"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="16"
                        />
                        {segments.map((s, i) => (
                          <circle
                            key={i}
                            cx="0"
                            cy="0"
                            r="48"
                            fill="none"
                            stroke={s.color}
                            strokeWidth="16"
                            strokeDasharray={`${s.dash} ${C - s.dash}`}
                            strokeDashoffset={-s.offset}
                          />
                        ))}
                      </g>
                    </svg>
                    <div className="min-w-0 flex-1">
                      {segments.map((s, i) => (
                        <div
                          key={i}
                          className="mb-2 flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="inline-block h-3 w-3 rounded"
                              style={{ backgroundColor: s.color }}
                            />
                            <span className="text-gray-700 truncate">
                              {s.label}
                            </span>
                          </div>
                          <span className="text-gray-900 font-medium">
                            {fmt(s.value)}
                          </span>
                        </div>
                      ))}
                      {totalSpend === 0 && (
                        <p className="text-xs text-gray-500">
                          No spend recorded in the last 30 days.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent transactions */}
            <section className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-gray-800">
                    Recent transactions
                  </h2>
                  <Link
                    href="/transactions"
                    className="text-sm font-medium text-[#0b3a75] underline underline-offset-2 hover:text-black"
                  >
                    View all
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr className="text-left text-gray-500">
                        <th className="px-5 py-3 font-medium">Date</th>
                        <th className="px-5 py-3 font-medium">Description</th>
                        <th className="px-5 py-3 font-medium">Category</th>
                        <th className="px-5 py-3 font-medium text-right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {txns.map((t) => {
                        const isDebit = t.amount > 0;
                        return (
                          <tr key={t.id} className="text-gray-700">
                            <td className="px-5 py-3 whitespace-nowrap">
                              {new Date(t.posted_at).toLocaleDateString(
                                "en-GB",
                                { day: "2-digit", month: "short" }
                              )}
                            </td>
                            <td className="px-5 py-3">
                              <div className="truncate max-w-[28ch]">
                                {t.description}
                              </div>
                              <div className="text-xs text-gray-400">
                                {t.account_id ?? ""}
                              </div>
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap">
                              {t.category ?? "—"}
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap text-right">
                              <span
                                className={`font-medium ${
                                  isDebit ? "text-gray-900" : "text-emerald-600"
                                }`}
                              >
                                {isDebit ? "-" : "+"}
                                {fmt(Math.abs(t.amount))}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Right rail examples */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4">
                  <h2 className="text-base font-semibold text-gray-800">
                    Your cards
                  </h2>
                </div>
                <div className="p-5 text-sm text-gray-600">
                  <p>Link a card to see limits, statements, and controls.</p>
                  <Link
                    className="mt-3 inline-block rounded border border-gray-300 px-3 py-2 text-gray-800 hover:bg-gray-50"
                    href="/cards/link"
                  >
                    Link a card
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4">
                  <h2 className="text-base font-semibold text-gray-800">
                    Scheduled payments
                  </h2>
                </div>
                <div className="p-5 text-sm text-gray-600">
                  <p>No scheduled payments found.</p>
                  <Link
                    className="mt-3 inline-block rounded border border-gray-300 px-3 py-2 text-gray-800 hover:bg-gray-50"
                    href="/payments/schedule"
                  >
                    Set up a payment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
