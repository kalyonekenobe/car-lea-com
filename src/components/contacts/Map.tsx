import {FC} from "react";

export const Map: FC = () => {
  return (
    <div className={"map-wrapper"}>
      <iframe
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.8671559922486!2d30.497970240037507!3d5" +
          "0.45135291691984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce60898c3581%3A0x98e2fe1c31" +
          "e01fbb!2z0LLRg9C70LjRhtGPINCR0YPQu9GM0LLQsNGA0L3Qvi3QmtGD0LTRgNGP0LLRgdGM0LrQsCwgMjIsINCa0LjRl9CyLCA" +
          "wMjAwMA!5e0!3m2!1suk!2sua!4v1670148409253!5m2!1suk!2sua"}
        loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"} />
    </div>
  )
}