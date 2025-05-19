import Layout from "@/components/shared/layout";
import PixelScripts from "@/components/pixelScripts";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PixelScripts />
        <Layout>
          {children}
        </Layout>
    </>
  );
}
