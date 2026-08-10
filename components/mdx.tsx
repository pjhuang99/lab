import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import {
  Conversation,
  type ConversationMessage
} from "@/components/conversation";
import { ImageBlock, Timeline, TimelineItem, Field } from "@/components/timeline";
import { PromptCard } from "@/components/prompt-card";
import { Result } from "@/components/result";
import { Lessons } from "@/components/lessons";
import { Moments } from "@/components/moments";
import { Pipeline } from "@/components/pipeline";
import { BeforeAfterSlider } from "@/components/before-after";
import { RoleSplit } from "@/components/role-split";
import { TryItYourself } from "@/components/try-it-yourself";

function Heading2(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="mt-16 border-t-2 border-ink pt-4 font-sans text-2xl font-bold leading-tight text-ink sm:text-3xl"
      {...props}
    />
  );
}

function Heading3(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="mt-10 font-sans text-lg font-bold leading-snug text-ink"
      {...props}
    />
  );
}

function Paragraph(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className="mt-5 max-w-prose text-[15px] leading-7 text-ink/85"
      {...props}
    />
  );
}

function Anchor(props: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="underline decoration-line underline-offset-4 transition-colors hover:text-muted"
      {...props}
    />
  );
}

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      alt={props.alt}
      loading="lazy"
      className="mt-6 w-full border border-line bg-paper object-cover"
    />
  );
}

function UnorderedList(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="mt-5 max-w-prose list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink/85"
      {...props}
    />
  );
}

function OrderedList(props: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="mt-5 max-w-prose list-decimal space-y-2 pl-5 text-[15px] leading-7 text-ink/85"
      {...props}
    />
  );
}

function Blockquote(props: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="mt-6 max-w-prose border-l-2 border-acid pl-5 text-lg font-medium leading-8 text-ink"
      {...props}
    />
  );
}

function Pre(props: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="mt-6 overflow-x-auto border border-line bg-ink p-4 font-mono text-xs leading-6 text-paper"
      {...props}
    />
  );
}

function Rule() {
  return <hr className="mt-12 border-line" />;
}

export const mdxComponents = {
  Timeline,
  TimelineItem,
  Field,
  ImageBlock,
  Conversation,
  PromptCard,
  Result,
  Lessons,
  Moments,
  Pipeline,
  BeforeAfterSlider,
  RoleSplit,
  TryItYourself,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Anchor,
  img: Image,
  ul: UnorderedList,
  ol: OrderedList,
  blockquote: Blockquote,
  pre: Pre,
  hr: Rule
};

export type { ConversationMessage };
