import { fetchAuthenticatedUser, fetchWithdrawal } from "@/app/actions/user/data"
import { auth } from "@/app/auth";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";
import WithdrawalHistory from "@/components/history/WithdrawalHistory"

export const dynamic = "force-dynamic"

const page = async () => {
  const { user: logedinUser } = await auth();
  const user = await fetchAuthenticatedUser() || {};

  const withdrawal = await fetchWithdrawal() || [];

  return (
    <>
      <WithdrawalHistory withdrawal={JSON.parse(JSON.stringify(withdrawal))} />
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page