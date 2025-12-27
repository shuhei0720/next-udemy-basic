import ClientComponent from "@/components/ClientComponent"

export default function ServerComponent() {
  console.log('Server')
  return (
    <div>
      サーバー
      <ClientComponent />
    </div>
  )
}
