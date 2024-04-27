import CommitteCard from "@/components/committees/CommitteCard";

export default function CommitteesPage() {
  return (
    <div>
      <div class="flex flex-col justify-center py-10 space-y-10">
        <CommitteCard />
        <CommitteCard />
        <CommitteCard />
        <CommitteCard />
      </div>
    </div>
  );
} 