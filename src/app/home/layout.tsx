import MainLayout from "@/components/organisms/MainLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
