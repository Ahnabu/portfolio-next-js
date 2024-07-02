import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Text from "@/components/Text";
export default function Home() {
  
  return (
    <section className="h-full mb-6 md:mb-12 xl:mb-16">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between ">
          {/* text  */}
          <Text/>
          {/* photo */}
          <div className="order-1 xl:order-none">
             <Photo></Photo>
          </div>
       
        </div>
        
      </div>
      <Stats/>
  </section>
  );
}