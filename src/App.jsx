import LinksList from "./components/Links/LinksList";
import Header from "./Header";

const linksData = [
  { icon: "youtube", link: "https://www.youtube.com" },
  { icon: "discord", link: "https://discord.com/channels/@me" },
  { icon: "facebook", link: "https://facebook.com" },
  { icon: "github", link: "https://github.com" },
  { icon: "twitter", link: "https://x.com" },
  { icon: "linkedin", link: "https://linkedin.com" },
];

export default function App() {
  return (
    <section className="bg-ctp-mantle text-ctp-text w-full min-h-dvh flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-sm md:max-w-2xl px-5 justify-self-center gap-6">
        <Header />
        <LinksList links={linksData} />
      </div>
    </section>
  );
}
