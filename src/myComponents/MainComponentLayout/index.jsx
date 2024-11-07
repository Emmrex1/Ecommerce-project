import ProfileCard from "./ProfileCard";
import PromotionCard from "./PromotionCard";

export default function MarketplaceLayout() {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center p-8 space-y-4 lg:space-y-0 lg:space-x-4 md:space-x-3">
      <div className="w-full max-w-xs lg:max-w-sm lg:mr-4">
        <ProfileCard />
      </div>

      <div className="flex-1 max-w-2xl grid grid-cols-2 lg:grid-cols-2 gap-4">
        <PromotionCard
          title="Legumes & Cereals"
          subtitle="Feed your family the best"
          imageUrl="https://banner2.cleanpng.com/20180328/ire/avjkqgryf.webp"
        />
        <PromotionCard
          title="Dairy & Eggs"
          subtitle="A different kind of grocery store"
          imageUrl="https://www.bansalsupermarket.com/upload/category/grocery_staples/loose_grocessary.png"
        />
      </div>
    </div>
  );
}
