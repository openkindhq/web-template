import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@openkind/components";
import { useTranslation } from "next-i18next";

export default function Faq() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center pb-12">
      <div className="w-4/5">
        <h1 className="font-heading text-xl font-semibold">{t("faq.title")}</h1>
        <Accordion type="single" collapsible className="lg:w-4/5">
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {t("faq.howToContribute.trigger")}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                {t("faq.howToContribute.text")}
                <Button variant="outline" className="mt-4 w-min">
                  {t("faq.howToContribute.button")}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
