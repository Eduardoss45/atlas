"use client";
import { useState, useEffect } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import translations from '@/data/translate.json';

// Tipagem para os dados do país
interface CountryData {
  capital: string;
  resumo: string;
  bandeira: string;
  clima: { dia: string; min: number; max: number }[];
  indicadores: {
    pib: { valor: number; ano: number };
    populacao: { valor: number };
    expectativaVida: { valor: number };
  };
}

export default function CountryInfo() {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Brasil');
  const [data, setData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(false);

  const countryNames = Object.keys(translations);

  async function fetchInfo(country: string) {
    setLoading(true);
    setData(null);
    try {
      const res = await fetch(`http://localhost:3001/info/${country}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInfo(selectedCountry);
  }, [selectedCountry]);

  const formatIndicator = (value: number) => {
    if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
    return value.toString();
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pesquisar País</CardTitle>
        </CardHeader>
        <CardContent>
          <Command>
            <CommandInput
              placeholder="Digite o nome de um país..."
              onFocus={() => setOpen(true)}
            />
            {open && (
              <CommandList>
                <CommandEmpty>Nenhum país encontrado.</CommandEmpty>
                <CommandGroup heading="Países">
                  {countryNames.map(country => (
                    <CommandItem
                      key={country}
                      onSelect={() => {
                        setSelectedCountry(country);
                        setOpen(false);
                      }}
                    >
                      {country}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </CardContent>
      </Card>

      {loading && <p className="text-center">Carregando...</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                {data.capital} - {selectedCountry}
              </CardTitle>
              <img
                src={data.bandeira}
                alt={`Bandeira de ${selectedCountry}`}
                className="w-20"
              />
            </CardHeader>
            <CardContent>
              <p>{data.resumo}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Temperaturas Previstas (°C)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data.clima}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="min" stroke="#3b82f6" name="Mínima" />
                  <Line type="monotone" dataKey="max" stroke="#ef4444" name="Máxima" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indicadores Socioeconômicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">PIB (USD) - {data.indicadores.pib.ano}</h3>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={[{ name: 'PIB', value: data.indicadores.pib.valor }]}>
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatIndicator} />
                    <Tooltip formatter={(value: number) => `$${value.toLocaleString('pt-BR')}`} />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold">População</h3>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={[{ name: 'População', value: data.indicadores.populacao.valor }]}>
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatIndicator} />
                    <Tooltip formatter={(value: number) => `${value.toLocaleString('pt-BR')} hab.`} />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold">Expectativa de Vida</h3>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={[{ name: 'Expectativa de Vida', value: data.indicadores.expectativaVida.valor }]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: number) => `${value.toFixed(1)} anos`} />
                    <Bar dataKey="value" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
