import { AddTask } from "./components/AddTask"
import LoginForm from "./components/LoginForm"

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center">
        <h1 className="text-2x">Todo List App</h1>
        <AddTask />
        <LoginForm />
      </div>
    </main>
  )
}
