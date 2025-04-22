import { motion } from "framer-motion";
import Button from "../../atoms/Button";
import { Download } from "lucide-react";
import ResumeHeader from "../ResumeeHeader/ResumeeHeader";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="py-5 px-4 md:py-5 max-w-4xl mx-auto">
      <ResumeHeader />
      <motion.p
        className="text-muted-foreground text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {t('description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button variant="secondary" asChild>

          <a href="/porfolio/jonathanlopezresumee.pdf" download>
            <Download size={16} />{t('download_resume')}
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutMe;