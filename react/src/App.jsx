import Article from "@/components/Article";
import Calculator from "@/components/Calculator";

// App
export default function App() {
  return (
    <div className="flex flex-col-reverse items-start p-10 mx-auto gap-y-[6.25rem] gap-x-0 max-w-7xl md:gap-y-0 md:gap-x-10 md:flex-row xl:p-[6.25rem] xl:gap-x-[6.25rem]">
      <Article />
      <Calculator />
    </div>
  );
}
