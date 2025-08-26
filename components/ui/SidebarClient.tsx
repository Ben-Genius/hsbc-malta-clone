// app/dashboard/_components/SidebarClient.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  ArrowLeftRight,
  Receipt,
  Settings,
  LogOut,
} from "lucide-react";

type Props = { userEmail?: string | null };

export default function SidebarClient({ userEmail }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const nav = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/accounts", label: "Accounts", icon: Wallet },
    { href: "/cards", label: "Cards", icon: CreditCard },
    { href: "/transfer", label: "Transfers", icon: ArrowLeftRight },
    { href: "/transactions", label: "Transactions", icon: Receipt },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace("/security");
  }

  const itemCls = (href: string) =>
    `flex items-center gap-2 rounded px-3 py-2 text-sm ${
      pathname?.startsWith(href)
        ? "bg-gray-100 text-gray-900"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <>
      {/* Mobile: compact nav card */}
      <div className="md:hidden mb-4 rounded-lg border border-gray-200 bg-white">
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-sm text-gray-600">
            Signed in as <b className="text-gray-900">{userEmail ?? "—"}</b>
          </p>
        </div>
        <div className="p-2 flex flex-wrap gap-2">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded bg-[#db0011] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>

      {/* Desktop: sticky left rail */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:gap-3 md:pr-4">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="px-4 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">My banking</h2>
            <p className="mt-1 text-xs text-gray-600 break-words">
              {userEmail ?? "—"}
            </p>
          </div>
          <nav className="p-2">
            {nav.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className={itemCls(href)}>
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-2 pb-3">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 rounded bg-[#db0011] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
