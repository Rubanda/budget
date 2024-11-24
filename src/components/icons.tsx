
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  LayoutDashboard,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  MapPin,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  AlignJustify,
  ThermometerSun,
  LogOut,
  Send,
  type Icon as LucideIcon,
  Text,
} from "lucide-react"
import { 
    FaceIcon, 
    ImageIcon, 
    SunIcon,
    HamburgerMenuIcon,
    MixIcon,
    DashboardIcon,
    PersonIcon,
    ChevronLeftIcon,
    ReloadIcon,
    CalendarIcon,
    PlusIcon,
    RocketIcon,
    DownloadIcon,
    CheckCircledIcon,
    CircleBackslashIcon,
    CrossCircledIcon,
    EnvelopeClosedIcon,
    RadiobuttonIcon,
    ExternalLinkIcon,
    TrashIcon,
    Pencil2Icon,
    Pencil1Icon,
    ChatBubbleIcon,
    GearIcon,
} from "@radix-ui/react-icons"

export type Icon = typeof LucideIcon
export const Icons = {
  face: FaceIcon,
  image: ImageIcon,
  sun: SunIcon,
  menu: HamburgerMenuIcon,
  mix: MixIcon,
  dashboard: DashboardIcon,
  user: PersonIcon,
  chevronLeft: ChevronLeftIcon,
  spinner: ReloadIcon,
  calendar: CalendarIcon,
  plus: PlusIcon,
  rocket: RocketIcon,
  download: DownloadIcon,
  status: CheckCircledIcon,
  circlelips: CircleBackslashIcon,
  crossedcircle: CrossCircledIcon,
  envelope: EnvelopeClosedIcon,
  radio: RadiobuttonIcon,
  externalLink:ExternalLinkIcon,
  checkCircle: CheckCircledIcon,
  check: CheckCircledIcon,
  trash: TrashIcon,
  logout: LogOut,
  pencil: Pencil1Icon,
  chat: ChatBubbleIcon,
  settings: GearIcon,
  text: Text,
  google: ({ ...props }: any) => (
    <svg width="50px"
      height="50px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <title>google</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M24.7,20.5v7.6H35.6a10.9,10.9,0,0,1-10.9,8,12.1,12.1,0,1,1,7.9-21.3l5.6-5.6A20,20,0,1,0,24.7,44c16.8,0,20.5-15.7,18.9-23.5Z" />
        </g>
      </g>
    </svg>
  ),
}