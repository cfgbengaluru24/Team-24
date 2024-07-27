import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  return (
    <div className="flex justify-center items-center mt-12">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link href="/signin" className="underline" prefetch={false}>
              Sign in
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center">
            <Label htmlFor="name">Select your role</Label>
            <div className="mt-5 flex flex-row gap-4">
              <Link href="/signup/admin" className="underline" prefetch={false}>
                <Button variant={"outline"}> Admin </Button>
              </Link>
              <Link href="/signup/lru" className="underline" prefetch={false}>
                <Button variant={"outline"}> LRU </Button>
              </Link>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}