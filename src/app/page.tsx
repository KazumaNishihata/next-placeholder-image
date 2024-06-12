import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>&lt;Image src="/placeholder-image?width=400&height=300" alt="" width="400" height="300" /&gt;</h2>
      <Image src="/placeholder-image?width=400&height=300" alt="" width="400" height="300" />
      <h2>&lt;Image src="/placeholder-image?width=100&height=300&background=rgb(41, 122, 137)&color=white" alt="" width="100" height="300" /&gt;</h2>
      <Image src="/placeholder-image?width=100&height=300&background=rgb(41, 122, 137)&color=white" alt="" width="100" height="300" />
    </div>

  );
}
