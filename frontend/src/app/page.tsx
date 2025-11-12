import CountryInfo from '@/components/CountryInfo';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Atlas Interativo 🌎</h1>
      <CountryInfo />
    </main>
  );
}
