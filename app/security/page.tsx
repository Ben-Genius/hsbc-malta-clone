import Header from "@/components/Header"
import OnlineBankingHero from "@/components/OnlineBankingHero"
import OnlineBankingContent from "@/components/OnlineBankingContent"
import RegistrationOptions from "@/components/RegistrationOptions"
import OtherWaysToBankSection from "@/components/OtherWaysToBankSection"
import Footer from "@/components/Footer"
import SecurityHeader from "@/components/SecurityHeader"

export default function OnlineBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SecurityHeader />
      <main className="pt-30">
        <OnlineBankingHero />
       
  
      </main>
      <Footer />
    </div>
  )
}
