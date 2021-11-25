import { useRouter } from "next/router"

export default function Detailpage() {
  const router = useRouter()
  const {
    query: { dynamic, id },
  } = router
  return (
    <div>
      Data: {dynamic} - {id}
    </div>
  )
}