import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ForgotPass = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container h-full flex flex-col justify-center items-center pt-10">
        <Card>
          <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>
              Forgot your password? Enter your email and we will send a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="Email">Email Address</Label>
              <Input id="email" type="email" placeholder="Email Address" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

export default ForgotPass;