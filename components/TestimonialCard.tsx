type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
};

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-base leading-7 text-slate-700">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-6 text-sm font-medium text-slate-900">
        {name}
        <span className="block text-xs font-normal text-slate-500">{title}</span>
      </figcaption>
    </figure>
  );
}
