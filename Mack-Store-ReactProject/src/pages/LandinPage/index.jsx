import { DefaultTemplate } from "../../components/DefaultTemplate";
import { BannerSection } from "../../components/sections/BannerSection";
import { CategoriesSection } from "../../components/sections/CategoriesSection";
import { FormSection } from "../../components/sections/FormSection";
import { ProductsSection } from "../../components/sections/ProductSection";

export const LandinPage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <CategoriesSection />
        <ProductsSection />
        <FormSection />
      </DefaultTemplate>
    </>
  );
};
