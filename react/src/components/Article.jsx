// Styles
const h1 =
  "mb-5 text-[2rem] leading-tight font-bold tracking-[-0.02em] xs:text-[2.5rem]";
const h2 =
  "mb-5 text-2xl font-bold leading-[1.1em] tracking-[-0.02em] xs:text-[2rem]";
const p = "mb-5 text-lg leading-[1.667em]";
const a = "text-red-500 hover:underline";
const ul = "pl-6";
const li = "relative text-lg leading-[1.667em] mt-[0.625rem]";
const secondLi = "relative text-lg leading-[1.667em] mt-[0.625rem]";

// Article
export default function Article() {
  return (
    <article className="max-w-lg mx-auto md:mx-0 md:max-w-none">
      <section>
        <h1 className={h1}>Quam Tristique Condimentum</h1>
        <p className={p}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.{" "}
          <a href="#" className={a}>
            Curabitur blandit
          </a>{" "}
          tempus porttitor. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet. Vestibulum id ligula porta felis euismod
          semper.
        </p>
      </section>

      <div className="flex flex-col-reverse items-start mt-10 gap-y-10 gap-x-0 lg:flex-row lg:gap-x-10 lg:gap-y-0">
        <section>
          <h2 className={h2}>Fringilla Euismod Adipiscing Ipsum</h2>

          <p className={p}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
            lacinia bibendum nulla sed.
          </p>

          <ul className={ul}>
            <li className={li}>Tellus Ullamcorper Inceptos</li>
            <li className={li}>
              Magna Condimentum
              <ul className={ul}>
                <li className={secondLi}>Mattis Tristique</li>
                <li className={secondLi}>Pharetra Pellentesque Dapibus</li>
              </ul>
            </li>
            <li className={li}>Aenean Inceptos</li>
            <li className={li}>Parturient Bibendum</li>
          </ul>
        </section>

        <img
          className="h-auto rounded w-60"
          src="/image.jpg"
          alt="Photo of books and a blackboard"
        />
      </div>
    </article>
  );
}
