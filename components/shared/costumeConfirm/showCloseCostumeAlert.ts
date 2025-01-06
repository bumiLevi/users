import { createRoot } from "react-dom/client";

const ConfirmElementId = 'ConfirmElementId'


export const showCostumeAlert = (children: React.ReactNode) => {
  const div = document.createElement('div')
  div.id = ConfirmElementId

  document.body.appendChild(div)
  const root = createRoot(div)
  root.render(children)
}

export const closeCostumedAlert = () => {
  const element = document.getElementById(ConfirmElementId)
  element?.remove()
}