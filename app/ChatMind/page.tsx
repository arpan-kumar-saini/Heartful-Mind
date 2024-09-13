import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

// Main component
export default function Component() {
  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="flex-col hidden gap-2 text-white bg-gradient-to-b from-[#1a1b1e] to-[#16171a] md:flex">
        <div className="sticky top-0 p-2">
          <Button variant="ghost" className="justify-start w-full gap-2 px-2 text-left">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <BotIcon className="w-4 h-4" />
            </div>
            <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">Mental Health Support</div>
            <PenIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-1 p-2 text-white">
            <div className="px-2 text-xs font-medium text-white">Today</div>
            {["Coping with Stress and Anxiety", "Mindfulness Techniques for Mental Health", "Dealing with Depression"].map((text, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                prefetch={false}
              >
                {text}
              </Link>
            ))}
          </div>
          <div className="grid gap-1 p-2 text-white">
            <div className="px-2 text-xs font-medium text-white">Yesterday</div>
            {["Improving Sleep for Mental Health", "Self-Care Strategies", "Seeking Professional Help"].map((text, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                prefetch={false}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-b from-[#1a1b1e] to-[#16171a] text-white">
        <div className="sticky top-0 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-muted  text-white text-lg">
                Mental Health Support <span className="text-white">v1.0</span>
                <ChevronDownIcon className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-w-[300px]">
              <DropdownMenuItem className="items-start gap-2">
                <SparkleIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                <div>
                  <div className="font-medium">Emotional Wellbeing</div>
                  <div className="text-muted-foreground/80">Comprehensive support for your mental health</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="items-start gap-2">
                <ZapIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                <div>
                  <div className="font-medium">Stress Management</div>
                  <div className="text-muted-foreground/80">Coping strategies for everyday challenges</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Image" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">You</div>
              <div className="prose text-muted-foreground">
                <p>
                  I've been feeling really stressed and anxious lately. Can you help me find some coping strategies?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Image" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">Mental Health Support</div>
              <div className="prose text-muted-foreground">
                <p>
                  I'm sorry to hear you've been feeling stressed and anxious. That can be really tough to deal with.
                  Here are some coping strategies that may help:
                </p>
                <ul>
                  {[
                    "Practice deep breathing or meditation",
                    "Go for a walk or do some light exercise",
                    "Spend time in nature or do an activity you enjoy",
                    "Talk to a trusted friend or family member",
                    "Consider seeking professional help if the anxiety persists"
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>Let me know if you have any other questions or if there's anything else I can do to help.</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ClipboardIcon className="w-4 h-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Upvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span className="sr-only">Downvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <RefreshCcwIcon className="w-4 h-4" />
                  <span className="sr-only">Regenerate</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-gradient-to-b from-[#1a1b1e] to-[#16171a]">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              name="message"
              id="message"
              rows={1}
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16 bg-gradient-to-b from-[#1a1b1e] to-[#16171a]"
            />
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3" disabled>
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
          <p className="text-xs font-medium text-center text-neutral-900">
            This is an AI assistant. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  )
}

// Icon Components
function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M4.8 4.8l1.4 1.4" />
      <path d="M17.8 17.8l1.4 1.4" />
      <path d="M4.8 19.2l1.4-1.4" />
      <path d="M17.8 6.2l1.4-1.4" />
      <path d="M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
    </svg>
  )
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M12 16h9" />
      <path d="M12 12h9" />
      <path d="M12 8h9" />
      <path d="M12 4h9" />
      <path d="M3 20h9" />
      <path d="M3 16h9" />
      <path d="M3 12h9" />
      <path d="M3 8h9" />
      <path d="M3 4h9" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 9-7 7-7-7" />
    </svg>
  )
}

function SparkleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.3 4.7L20 8l-4 3.8L16 18l-4.3-2.3L8 20l-2-4.7L2 8l5.7-1.3L12 2z" />
    </svg>
  )
}

function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
    </svg>
  )
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2zM3 8v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8H3z" />
    </svg>
  )
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.8L8 13v7h2v-6h4v-4z" />
    </svg>
  )
}

function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 15v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7.8L16 12V5h-4v6H6a2 2 0 0 0-2 2v3.8L8 17h2v-6h4z" />
    </svg>
  )
}

function RefreshCcwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.6 6.4A9 9 0 0 0 12 4V1l-4 4l4 4V6.4a7.5 7.5 0 0 1 5.6 3.1" />
      <path d="M6.4 17.6A9 9 0 0 1 12 20v3l4-4l-4-4v2.4a7.5 7.5 0 0 0-5.6-3.1" />
    </svg>
  )
}
