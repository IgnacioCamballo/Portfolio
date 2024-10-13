import usePortfolio from "../hooks/usePortfolio";
import trans from "../lenguage/lenguage.json"

export function lenguage(text: string) {
  const {lenguage} = usePortfolio()

  const words: {[key: string]: {lenguage: string; text: string}[]} = trans
  const object: {lenguage: string; text: string}[] = words[text]
  return object.find((i: { lenguage: string; }) => i.lenguage === lenguage)?.text
}