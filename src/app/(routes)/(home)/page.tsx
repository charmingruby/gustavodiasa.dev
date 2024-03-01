import { name, role } from '@/data/profile'
import { GeistMono } from 'geist/font/mono'

export default function Page() {
  return (
    <main>
      <h1 className={`${GeistMono.className} font-bold`}>{name}</h1>
      <strong>{role}</strong>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          eveniet eos quibusdam iusto error vitae aperiam. Magni quia ipsa,
          eveniet laborum ut eos dicta, tenetur assumenda, adipisci incidunt
          consectetur quaerat.
        </p>
      </div>
    </main>
  )
}
