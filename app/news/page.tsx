"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { Link } from "@heroui/link";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";
import Footer from "@/components/footer";

//  Important:  NEXT_PUBLIC_  for client-side access
const GUARDIAN_API_KEY = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;
const GUARDIAN_LOGO_URL = process.env.NEXT_PUBLIC_GUARDIAN_URL;


interface NewsArticle {
  error?: boolean;
  title: string;
  url: string;
  source: { name: string };
  imageUrl?: string;
}

const fetchCanadianFinancialNews = async (): Promise<NewsArticle[]> => {
  if (!GUARDIAN_API_KEY) {
    console.error("Guardian API key is missing.");
    // Return a default error message if the API key is not available
    return [
      {
        error: true,
        title: "API Key Missing",
        url: "#",
        source: { name: "Konnect" },
      },
    ];
  }

  const apiUrl = `https://content.guardianapis.com/search?section=business&format=json&show-fields=all,thumbnail&api-key=${GUARDIAN_API_KEY}&q=canada`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.response?.status === "ok" && data.response.results) {
      const articles: NewsArticle[] = data.response.results.map(
        (article: any) => {
          return {
            title: article.webTitle || "No Title",
            url: article.webUrl || "#",
            source: { name: "The Guardian" },
            imageUrl: article.fields?.thumbnail || undefined,
          };
        }
      );
      return articles;
    } else {
      return [
        { title: "Failed to Load News", url: "#", source: { name: "Konnect" } },
      ];
    }
  } catch (error: any) {
    console.error("Error fetching news:", error);
    return [
      {
        title: `Error: ${error.message}`,
        url: "#",
        source: { name: "Konnect" },
      },
    ];
  }
};

export default function BlogPage() {
  const [newsHeadlines, setNewsHeadlines] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchCanadianFinancialNews();
      setNewsHeadlines(news);
    };
    getNews();
  }, []);

  if (!newsHeadlines.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (newsHeadlines[0].error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          Error fetching news: {newsHeadlines[0].title}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1200px] gap-6 grid grid-cols-12 px-4 sm:px-8">
        {newsHeadlines.map((news, index) => {
          if (index < 3) {
            return (
              <Card
                key={index}
                className={cn(
                  "col-span-12 sm:col-span-6 lg:col-span-4",
                  "h-[300px]",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02] cursor-pointer",
                  "border border-default-200",
                  "bg-card",
                  "shadow-md"
                )}
                style={{ marginBottom: "1.5rem" }}
              >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {news.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={news.title}
                  className="z-0 w-full h-full object-cover rounded-t-lg"
                  src={news.imageUrl || "https://placehold.co/400x300"}
                  style={{ aspectRatio: "16 / 9" }}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="News source icon"
                      className="rounded-full w-10 h-11 bg-white"
                      src={GUARDIAN_LOGO_URL}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {news.source.name}
                      </p>
                      <p className="text-tiny text-white/60">
                        Get the latest news.
                      </p>
                    </div>
                  </div>
                  <Link href={news.url} isExternal>
                    <Button
                      className="text-tiny"
                      color="primary"
                      radius="full"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          } else if (index === 3) {
            return (
              <Card
                isFooterBlurred
                key={index}
                className={cn(
                  "w-full h-[300px]",
                  "col-span-12 sm:col-span-6 lg:col-span-5",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02]",
                  "border border-default-200",
                  "bg-card",
                  "shadow-md"
                )}
                style={{ marginBottom: "1.5rem" }}
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    New
                  </p>
                  <h4 className="text-black font-medium text-2xl">
                    {news.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={news.title}
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={news.imageUrl || "https://placehold.co/400x300"}
                  style={{ aspectRatio: "16 / 9" }}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="News source icon"
                      className="rounded-full w-10 h-11 bg-white"
                      src={GUARDIAN_LOGO_URL}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {news.source.name}
                      </p>
                      <p className="text-tiny text-white/60">
                        Get the latest news.
                      </p>
                    </div>
                  </div>
                  <Link href={news.url} isExternal>
                    <Button
                      className="text-tiny"
                      color="primary"
                      radius="full"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          } else {
            const isLarge = index % 6 === 0;
            return (
              <Card
                key={index}
                className={cn(
                  "col-span-12 sm:col-span-6",
                  isLarge
                    ? "lg:col-span-8 h-[400px]"
                    : "lg:col-span-4 h-[300px]",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02]",
                  "border border-default-200",
                  "bg-card",
                  "shadow-md"
                )}
                style={{ marginBottom: "1.5rem" }}
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    More News
                  </p>
                  <h4
                    className={cn(
                      "text-white/90",
                      isLarge ? "font-medium text-2xl" : "font-medium text-xl"
                    )}
                  >
                    {news.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={news.title}
                  className="z-0 w-full h-full object-cover rounded-t-lg"
                  src={news.imageUrl || "https://placehold.co/400x300"}
                  style={{ aspectRatio: "16 / 9" }}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="News source icon"
                      className="rounded-full w-10 h-11 bg-white"
                      src={GUARDIAN_LOGO_URL}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {news.source.name}
                      </p>
                      <p className="text-tiny text-white/60">
                        Get the latest news.
                      </p>
                    </div>
                  </div>
                  <Link href={news.url} isExternal>
                    <Button radius="full" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          }
        })}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
