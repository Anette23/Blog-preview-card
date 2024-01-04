import image from "../assets/img/illustration-article.svg";
import avatar from "../assets/img/image-avatar.webp";
const Card = () => {
  return (
    <section className="bg-cardBg rounded-2xl border-[1px] border-heading p-5 flex flex-col gap-6 shadow-heading transition ease-in-out delay-150 cursor-pointer">
      <article>
        <img src={image} className="rounded-2xl" alt="card illustration" />
      </article>
      <article>
        <p className="bg-background inline-block py-1 px-3 font-bold text-sm rounded-md mb-4">
          Learning
        </p>
        <small className="block mb-4">Published 21 Dec 2023</small>
        <h1 className="font-extrabold text-xl mb-4 transition ease-in-out delay-150 hover:text-background">
          HTML & CSS foundations
        </h1>
        <p className="text-text text-sm font-semibold max-w-72">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </article>

      <article className="flex items-center gap-4">
        <img src={avatar} className="w-10" alt="image of Greg Hooper" />
        <p className="font-extrabold">Greg Hooper</p>
      </article>
    </section>
  );
};

export default Card;
