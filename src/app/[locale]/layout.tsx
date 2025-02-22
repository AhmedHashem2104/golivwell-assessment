import LocaleLayout from "@/components/layout/locale-layout";

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return <LocaleLayout params={params}>{children}</LocaleLayout>;
}
