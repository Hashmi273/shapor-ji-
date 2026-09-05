import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  MessageSquare,
  Smartphone,
  MessageCircle,
  Phone,
  PhoneOutgoing,
  Server,
  Palette,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Sparkles,
  Terminal,
  Building,
  Building2,
  Home,
  Eye,
  Layers,
  MapPin,
  Compass,
  FileText,
  Layout,
  Flame,
  Award,
  Users,
  Megaphone,
  Briefcase,
  ShieldCheck,
  Clock,
  Headphones,
  Zap,
  Bot,
  Send,
  Bell,
  Cpu,
  Inbox,
  FileCheck,
  ChevronDown,
  ChevronUp,
  BarChart3,
  TrendingUp,
  Activity,
  Lock,
  ShoppingBag,
  Landmark,
  Stethoscope,
  GraduationCap,
  Truck,
  Globe,
  Shield,
  RefreshCw,
  Key,
  FileCheck2,
  Scale,
  Car,
  Plane,
  Video,
  MousePointerClick,
  Copy,
  CheckCheck,
  Image,
  Share2,
  Instagram,
  Facebook,
  PhoneCall,
  PhoneForwarded,
  Mic,
  Volume2,
  Database,
  Network,
  Code2,
  Radio,
  Sliders,
  Webhook
} from 'lucide-react';
import smsMockup from '../assets/simulator-sms.png';
import rcsMockup from '../assets/simulator-rcs.png';
import whatsappMockup from '../assets/simulator-whatsapp.png';

import {
  BulkSmsVisual,
  RcsVisual,
  WhatsAppVisual,
  MetaMessagingVisual,
  ObdVoiceVisual,
  IvrVisual,
  SmppVisual,
  ApiIntegrationVisual,
  SiteBrandingVisual
} from '../components/ServiceVisuals';

interface ProductData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroDescription: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  features: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  benefits: string[];
  howItWorks: { step: number; title: string; description: string }[];
  hasAPI: boolean;
  apiDescription?: string;
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
}

const products: Record<string, ProductData> = {
  sms: {
    slug: 'sms',
    title: 'Bulk SMS Solutions',
    tagline: 'Instant, High-Throughput Business Messaging',
    description: 'Bulk SMS platform for promotional campaigns, critical OTPs and transactional updates with 99.9% delivery SLA.',
    heroDescription: 'Deliver millions of messages with direct carrier telco routing. From instant OTP authentication to high-volume promotional broadcasts — our enterprise SMS gateway handles massive scale with zero latency.',
    IconComponent: MessageSquare,
    features: [
      { title: 'Promotional SMS', description: 'Run high-converting marketing campaigns with targeted demographic scheduling.' },
      { title: 'Transactional SMS', description: 'Send order confirmations, delivery alerts, and banking balance notifications 24/7.' },
      { title: 'Instant OTP Delivery', description: 'Sub-second priority routes for critical two-factor authentication codes.' },
      { title: 'Campaign Management', description: 'Schedule broadcasts, manage dynamic contact lists, and run A/B copy tests.' },
      { title: 'Live Delivery Telemetry', description: 'Real-time DLR reports with timestamped delivery receipts down to the millisecond.' },
      { title: 'DLT & TRAI Compliance', description: 'Built-in template scrubbing and automatic DND compliance filtering.' },
    ],
    useCases: [
      { title: 'Flash Sales & Marketing', description: 'Reach hundreds of thousands of customers instantly with high-impact offers.' },
      { title: 'Transaction & Billing Alerts', description: 'Keep customers informed with real-time invoices, balance updates and receipts.' },
      { title: 'User Verification & 2FA', description: 'Secure user onboarding, logins and payment authorizations with instant OTPs.' },
      { title: 'Service Reminders', description: 'Automate appointment, payment due date and policy renewal notifications.' },
    ],
    benefits: [
      '99.9% on-time delivery rate SLA',
      'Sub-second OTP latency guarantee',
      'Direct Tier-1 telco carrier routing',
      '100% TRAI DLT registration support',
      'High TPS enterprise throughput',
      'REST API, SMPP and Webhook support',
    ],
    howItWorks: [
      { step: 1, title: 'Choose Route & Volume', description: 'Select promotional, transactional or OTP priority routes with dedicated SLA.' },
      { step: 2, title: 'Connect API or Dashboard', description: 'Integrate in minutes via REST APIs or use our intuitive web dashboard.' },
      { step: 3, title: 'Draft & Approve Templates', description: 'Configure DLT-approved header IDs and personalized message templates.' },
      { step: 4, title: 'Launch & Track Telemetry', description: 'Dispatch campaigns and monitor real-time delivery rates and click telemetry.' },
    ],
    hasAPI: true,
    apiDescription: 'Integrate high-speed SMS dispatch into your CRM, ERP or web applications with our clean RESTful API endpoints.',
    ctaText: 'Talk to Our SMS Experts →',
    metaTitle: 'Bulk SMS Services | Zion Marketing',
    metaDescription: 'Enterprise bulk SMS, promotional messaging, transactional alerts and instant OTP delivery from Zion Marketing.',
  },
  rcs: {
    slug: 'rcs',
    title: 'RCS Business Messaging',
    tagline: 'Next-Generation Interactive Rich Media Messaging',
    description: 'Transform regular text into app-like interactive customer experiences with verified sender branding.',
    heroDescription: 'Go beyond plain text. Deliver interactive carousels, action buttons, high-res videos and verified business branding right inside your customer\'s native messaging inbox with zero app install required.',
    IconComponent: Smartphone,
    features: [
      { title: 'Rich Media & Carousels', description: 'Showcase multiple product cards with high-definition images, videos and audio.' },
      { title: 'Suggested Action Buttons', description: 'Enable 1-tap website visits, direct phone calls, calendar bookings and map directions.' },
      { title: 'Verified Brand Sender ID', description: 'Display your official company logo, brand colors and verified trust badge.' },
      { title: 'Interactive Chatbot Journeys', description: 'Automate customer self-service, catalog browsing and FAQ resolution.' },
      { title: 'Rich Read Receipts & Metrics', description: 'Track message opens, button clicks, image views and user engagement telemetry.' },
      { title: 'Fallback to Smart SMS', description: 'Automatic fallback to Bulk SMS if recipient handset is outside RCS coverage.' },
    ],
    useCases: [
      { title: 'Interactive Product Catalogs', description: 'Let users scroll and shop product carousels directly inside their SMS app.' },
      { title: '1-Tap Booking & Ticketing', description: 'Send digital boarding passes, cinema tickets and hotel booking vouchers.' },
      { title: 'Customer Feedback Surveys', description: 'Collect instant CSAT scores and feedback through one-tap interactive buttons.' },
      { title: 'Rich Onboarding Guides', description: 'Deliver video tutorials and step-by-step interactive onboarding instructions.' },
    ],
    benefits: [
      '3x higher engagement than plain SMS',
      'Verified Google & Carrier trust mark',
      'Zero app installation required',
      'Interactive rich media carousels',
      'Detailed click & conversion tracking',
      'Automated fallback failover routes',
    ],
    howItWorks: [
      { step: 1, title: 'Verify Brand Profile', description: 'Set up your official brand logo, color accents and verified sender credentials.' },
      { step: 2, title: 'Design Rich Templates', description: 'Create responsive card carousels, suggested actions and quick replies.' },
      { step: 3, title: 'Connect API & Webhooks', description: 'Link your backend systems to receive user button clicks and 2-way responses.' },
      { step: 4, title: 'Launch & Analyze Engagement', description: 'Deliver branded rich messages and track interactive conversions in real time.' },
    ],
    hasAPI: true,
    apiDescription: 'Full RCS API supporting dynamic carousel payloads, rich media assets, suggested actions and 2-way webhook listeners.',
    ctaText: 'Talk to Our RCS Specialists →',
    metaTitle: 'RCS Business Messaging | Zion Marketing',
    metaDescription: 'Next-gen RCS business messaging with rich media, interactive carousels, and verified sender branding by Zion Marketing.',
  },
  whatsapp: {
    slug: 'whatsapp',
    title: 'WhatsApp Business API',
    tagline: 'Engage Over 2 Billion Users on Official WhatsApp Channels',
    description: 'Official WhatsApp Business API platform for automated notifications, customer support bots, and 2-way conversational commerce.',
    heroDescription: 'Unlock the power of WhatsApp for your enterprise. Send automated order updates, billing invoices, marketing broadcasts, and deploy multi-agent customer support with official Green Tick verification.',
    IconComponent: MessageCircle,
    features: [
      { title: 'Official Meta API Endpoints', description: 'Direct Tier-1 BSP integration with official Meta cloud and on-premise infrastructure.' },
      { title: 'Automated Broadcasts', description: 'Deliver promotional catalogs, reminders and personalized updates at scale.' },
      { title: 'Multi-Agent Support Inbox', description: 'Unified live chat console for support agents with routing, tags and quick replies.' },
      { title: 'Chatbot & AI Automation', description: 'Deploy intelligent 24/7 conversational bots for lead qualification and FAQ handling.' },
      { title: 'Rich Media & Documents', description: 'Send PDFs, invoices, tickets, audio notes, product catalogs and location pins.' },
      { title: 'Green Tick Verification', description: 'Complete assistance to obtain the official Green Tick verification badge.' },
    ],
    useCases: [
      { title: 'Order & Shipping Telemetry', description: 'Automate live dispatch notifications, tracking links and delivery confirmations.' },
      { title: 'Customer Support Desk', description: 'Resolve customer inquiries 5x faster via conversational chat rather than email.' },
      { title: 'Lead Nurturing & Sales', description: 'Engage website visitors and re-engage dormant leads with personalized catalog chat.' },
      { title: 'Account Statements & Invoices', description: 'Deliver secure encrypted PDF invoices and receipts directly to customer WhatsApp.' },
    ],
    benefits: [
      '98% message open rate on WhatsApp',
      'End-to-end encrypted communication',
      'Multi-agent collaborative dashboard',
      'Pre-approved HSM template catalog',
      'CRM & E-commerce platform webhooks',
      'Official Meta Verified Partner setup',
    ],
    howItWorks: [
      { step: 1, title: 'Apply for WhatsApp API', description: 'We complete your Meta Business verification and phone number onboarding.' },
      { step: 2, title: 'Configure Message Templates', description: 'Draft and get Meta approval for transactional and marketing HSM templates.' },
      { step: 3, title: 'Connect CRM & Bots', description: 'Integrate with your ticketing tools, e-commerce stores, or custom backend.' },
      { step: 4, title: 'Scale 2-Way Chat', description: 'Start automated broadcasts and manage inbound customer chats seamlessly.' },
    ],
    hasAPI: true,
    apiDescription: 'Enterprise REST API for WhatsApp messaging, supporting session management, template dispatch, media uploads, and webhook events.',
    ctaText: 'Get WhatsApp API Access →',
    metaTitle: 'WhatsApp Business API | Zion Marketing',
    metaDescription: 'Official WhatsApp Business API platform, multi-agent live chat, automated bots, and green tick verification from Zion Marketing.',
  },
  ivr: {
    slug: 'ivr',
    title: 'Smart IVR Solutions',
    tagline: 'Intelligent Voice Journeys & Automated Call Routing',
    description: 'Cloud-based multi-level Interactive Voice Response (IVR) systems that connect callers to the right agent instantly.',
    heroDescription: 'Build intelligent voice workflows that never leave your customers waiting. Streamline inbound call routing, automate self-service inquiries, record calls, and sync voice telemetry with your CRM in real time.',
    IconComponent: Phone,
    features: [
      { title: 'Multi-Level Voice Menus', description: 'Configure flexible DTMF keypress menus with custom multi-language voice prompts.' },
      { title: 'Skill-Based Routing', description: 'Intelligently route calls based on caller location, VIP status, or agent availability.' },
      { title: 'Real-Time Call Recording', description: 'Cloud audio recording and quality assurance monitoring with secure storage.' },
      { title: 'Virtual Number & Toll-Free', description: 'Deploy dedicated 10-digit virtual numbers or 1800 toll-free vanity numbers.' },
      { title: 'Live Dashboard & CDRs', description: 'Live agent monitoring, queue status, call duration reports and detailed CDRs.' },
      { title: 'CRM & Webhook Sync', description: 'Pop caller info on agent screens instantly via real-time CRM webhooks.' },
    ],
    useCases: [
      { title: '24/7 Customer Helplines', description: 'Provide round-the-clock automated support without expanding your agent team.' },
      { title: 'Order Status & Balance Inquiries', description: 'Allow callers to check bank balances, order status or flight info via DTMF.' },
      { title: 'Automated Lead Qualification', description: 'Filter and qualify inbound prospects before transferring to sales reps.' },
      { title: 'Post-Call CSAT Surveys', description: 'Collect instant automated feedback ratings after agent support interactions.' },
    ],
    benefits: [
      'Zero missed business calls',
      'Reduced average customer wait times',
      'Cloud hosted — zero hardware needed',
      'Scalable concurrent call channels',
      'Detailed audio recordings & analytics',
      'Instant CRM screen-pop integration',
    ],
    howItWorks: [
      { step: 1, title: 'Choose Virtual Number', description: 'Select a local, national or 1800 toll-free number for your business.' },
      { step: 2, title: 'Design Voice Flowchart', description: 'Build your custom IVR flow with audio prompts and routing conditions.' },
      { step: 3, title: 'Add Agent Extensions', description: 'Configure department hunt groups, mobile forwarding, and overflow queues.' },
      { step: 4, title: 'Go Live & Track Calls', description: 'Publish your number and monitor real-time call volume on your analytics dashboard.' },
    ],
    hasAPI: true,
    apiDescription: 'RESTful Call Control API for initiating outbound calls, modifying live IVR routes, generating CDR reports and fetching call audio recordings.',
    ctaText: 'Build Your IVR Flow →',
    metaTitle: 'Cloud IVR Solutions | Zion Marketing',
    metaDescription: 'Multi-level cloud IVR systems, toll-free numbers, call recording, and automated voice routing from Zion Marketing.',
  },
  obd: {
    slug: 'obd',
    title: 'OBD / Automated Voice Calls',
    tagline: 'High-Volume Voice Broadcasting & Automated Dialing',
    description: 'Reach tens of thousands of customers simultaneously with automated outbound voice call broadcasts and interactive DTMF surveys.',
    heroDescription: 'Deliver personalized pre-recorded audio messages, emergency alerts, promotional voice campaigns, and automated payment reminders to massive customer lists with high concurrent dialing capacity.',
    IconComponent: PhoneOutgoing,
    features: [
      { title: 'Mass Voice Broadcasting', description: 'Dial thousands of customers per minute with high-capacity carrier lines.' },
      { title: 'Interactive DTMF Capture', description: 'Capture user keypress responses during the call for instant feedback and polls.' },
      { title: 'Dynamic Audio Personalization', description: 'Insert dynamic text-to-speech variables like names, amounts, and dates.' },
      { title: 'Intelligent Retry Logic', description: 'Automatic redialing for unanswered, busy or temporarily unreachable numbers.' },
      { title: 'Comprehensive Call DLR', description: 'Full reporting on call duration, pickup rates, listen percentage and keypresses.' },
      { title: 'Scheduled Campaign Blasts', description: 'Queue and schedule voice campaigns for optimal customer response hours.' },
    ],
    useCases: [
      { title: 'Payment & EMI Reminders', description: 'Automate overdue payment alerts and allow users to press 1 to connect to collection.' },
      { title: 'Emergency & Critical Alerts', description: 'Broadcast urgent weather, safety or IT outage alerts to employees and citizens.' },
      { title: 'Political & Public Announcements', description: 'Reach large regional voter bases with localized voice messages.' },
      { title: 'Event Invitations & RSVP', description: 'Invite attendees to webinars, conferences or store launches with 1-press RSVP.' },
    ],
    benefits: [
      'High concurrent channel capacity',
      'Overcomes regional literacy barriers',
      'Interactive keypress feedback capture',
      'Automatic busy & no-answer retries',
      'Granular call analytics & listen metrics',
      'Cost-effective high-impact mass reach',
    ],
    howItWorks: [
      { step: 1, title: 'Upload Contact Lists', description: 'Import your recipient numbers with dynamic personalized fields.' },
      { step: 2, title: 'Record or Upload Audio', description: 'Upload studio audio recordings or use our multi-lingual Text-To-Speech engine.' },
      { step: 3, title: 'Set Schedule & Retry Logic', description: 'Specify dialing speed, concurrency channels and automated retry intervals.' },
      { step: 4, title: 'Monitor Live Dispatch', description: 'Track live answer rates, call durations, and exported detailed CDR sheets.' },
    ],
    hasAPI: true,
    apiDescription: 'Trigger instant outbound voice calls programmatically with our simple Voice API, passing recipient numbers and dynamic audio files.',
    ctaText: 'Launch a Voice Campaign →',
    metaTitle: 'OBD Voice Call Services | Zion Marketing',
    metaDescription: 'Outbound dialer (OBD), voice call broadcasting, automated phone reminders, and DTMF polling by Zion Marketing.',
  },
  smpp: {
    slug: 'smpp',
    title: 'SMPP Connectivity',
    tagline: 'Carrier-Grade Protocol for High-Volume Aggregators & Enterprises',
    description: 'High-performance SMPP v3.4 connectivity designed for massive throughput, direct carrier routing, and sub-second latency.',
    heroDescription: 'Engineered for telecom aggregators, fintech institutions, and global enterprise platforms requiring hundreds to thousands of messages per second. Connect over dedicated SMPP sockets with dual-site redundancy and direct carrier binds.',
    IconComponent: Server,
    features: [
      { title: 'SMPP v3.4 Protocol Support', description: 'Full standard compliance with Transceiver, Transmitter, and Receiver binds.' },
      { title: 'Ultra-High TPS Capacity', description: 'Dedicated binds supporting from 100 TPS up to 5,000+ TPS throughput.' },
      { title: 'Direct Carrier Binds', description: 'Low-hop routing connected directly to tier-1 telecom operator SMSCs.' },
      { title: 'Redundant Load Balancing', description: 'Multi-datacenter active-active socket failover with zero message drop.' },
      { title: 'Real-Time DLR Streams', description: 'Instant delivery receipts streamed back over asynchronous receiver binds.' },
      { title: '24/7 NOC Telemetry Support', description: 'Dedicated network engineers monitoring throughput, latency, and socket health.' },
    ],
    useCases: [
      { title: 'Telecom & SMS Aggregators', description: 'Scale your wholesale messaging gateway with reliable upstream telco binds.' },
      { title: 'Banking & Core Fintech', description: 'Process high-velocity OTP and credit card transaction alerts without queuing.' },
      { title: 'High-Volume Enterprise SaaS', description: 'Connect large cloud platforms directly to enterprise messaging pipes.' },
      { title: 'Government & Utility Alerts', description: 'Deliver national utility bills and public service notices with guaranteed speed.' },
    ],
    benefits: [
      'Up to 5,000+ TPS per dedicated bind',
      'Dual-site redundant data centers',
      'Sub-500ms delivery latency',
      'Direct Tier-1 telco operator pipes',
      'Custom character sets (UCS2 / Latin)',
      '24/7 dedicated NOC support desk',
    ],
    howItWorks: [
      { step: 1, title: 'SLA & TPS Provisioning', description: 'Define required message throughput, target networks, and redundancy levels.' },
      { step: 2, title: 'Socket Credentials Setup', description: 'Receive your dedicated host IP, port, system_id, and password binds.' },
      { step: 3, title: 'Sandbox Interop Testing', description: 'Run test batches to verify submit_sm, deliver_sm, and character encodings.' },
      { step: 4, title: 'Production Go-Live', description: 'Switch live traffic to enterprise pipes with dedicated 24/7 NOC monitoring.' },
    ],
    hasAPI: true,
    apiDescription: 'Standard SMPP v3.4 protocol specification with custom IP whitelisting, configurable window size, and asynchronous DLR delivery.',
    ctaText: 'Request SMPP Credentials →',
    metaTitle: 'SMPP Connectivity | Zion Marketing',
    metaDescription: 'High-throughput SMPP v3.4 connectivity, carrier binds, and enterprise telecom gateway routing by Zion Marketing.',
  },
  meta: {
    slug: 'meta',
    title: 'Meta Messaging & Customer Engagement',
    tagline: 'High-Converting Engagement Across Facebook & Instagram Channels',
    description: 'Transform social interactions into qualified leads and sales conversations with official Meta messaging integrations.',
    heroDescription: 'Connect directly with billions of active social users. Run Click-to-WhatsApp and Click-to-Messenger campaigns, deploy 24/7 AI chat automation, qualify leads in real time, and route high-intent prospects straight into your CRM.',
    IconComponent: MessageSquare,
    features: [
      { title: 'Click-to-WhatsApp Ads Integration', description: 'Route high-intent Facebook and Instagram ad clicks straight into automated 1-on-1 WhatsApp conversations.' },
      { title: 'Instagram DM & Story Automation', description: 'Instantly reply to story mentions, story replies, and DMs with interactive cards and quick response options.' },
      { title: 'Messenger Lead Qualification Bots', description: 'Collect buyer preferences, contact details, and intent data with interactive multi-choice chatbots.' },
      { title: 'Dynamic Retargeting Broadcasts', description: 'Re-engage engaged ad prospects with personalized messaging offers and limited-time deals.' },
      { title: 'Omnichannel CRM Telemetry', description: 'Automatically push conversation histories, user phone numbers, and lead tags to your CRM.' },
      { title: 'Official Meta Partner Support', description: 'Assistance with Meta Business Manager verification, ad account linking, and API setup.' },
    ],
    useCases: [
      { title: 'Social Commerce & Product Drops', description: 'Let followers purchase directly from Instagram DMs with product card carousels.' },
      { title: 'Paid Ad Lead Qualification', description: 'Slash cost-per-lead by converting ad clicks into interactive automated chat journeys.' },
      { title: 'Event RSVP & Webinar Signups', description: 'Drive instant webinar registrations via interactive Facebook Messenger prompts.' },
      { title: 'Customer Feedback & CSAT', description: 'Engage active social community members with 1-tap rating polls.' },
    ],
    benefits: [
      '5x higher conversion than standard static landing pages',
      'Instant automated response to Instagram story mentions & DMs',
      'Seamless Click-to-WhatsApp direct ad funnel integration',
      'Complete CRM sync with Salesforce, Zoho, and HubSpot',
      '24/7 automated lead capture with zero human delay',
      'Verified Meta partner onboarding assistance',
    ],
    howItWorks: [
      { step: 1, title: 'Connect Meta Accounts', description: 'Link your Facebook Page and Instagram Professional account via Zion dashboard.' },
      { step: 2, title: 'Build Chatbot Workflows', description: 'Design conversational lead capture flows and keyword-triggered auto-replies.' },
      { step: 3, title: 'Launch Ad Campaigns', description: 'Deploy Click-to-Chat ad campaigns with pre-filled conversational prompts.' },
      { step: 4, title: 'Convert & Sync CRM', description: 'Engage leads in real time, track conversions, and sync contacts with your CRM.' },
    ],
    hasAPI: true,
    apiDescription: 'Full Meta Graph & Messaging API integration supporting automated DM webhooks, template triggers, and lead event synchronization.',
    ctaText: 'Launch Meta Messaging Campaigns →',
    metaTitle: 'Meta Messaging & Customer Engagement | Zion Marketing',
    metaDescription: 'Scale customer conversations, Click-to-WhatsApp ads, and Instagram DM automation with Zion Marketing Meta Messaging solutions.',
  },
  'api-integration': {
    slug: 'api-integration',
    title: 'Enterprise Communication APIs & CRM Integration',
    tagline: 'Developer-Friendly RESTful APIs & Webhooks for Seamless CRM Sync',
    description: 'Integrate multi-channel messaging directly into your existing CRM, ERP, and enterprise software stack with sub-second API execution.',
    heroDescription: 'Power your existing business tools with Zion\'s carrier-grade communication engine. Send automated SMS, RCS, WhatsApp alerts, and voice calls directly from Salesforce, Zoho, LeadSquared, HubSpot, Shopify, or custom backends.',
    IconComponent: Server,
    features: [
      { title: 'RESTful API & Webhook Architecture', description: 'Standard JSON payloads, granular webhook triggers, and asynchronous delivery event streaming.' },
      { title: 'Direct CRM Connectors', description: 'Pre-built native plugins and integrations for Salesforce, Zoho CRM, LeadSquared, and HubSpot.' },
      { title: 'Multi-Language SDKs', description: 'Production-ready libraries for Node.js, Python, PHP, Go, Java, and cURL with copy-paste snippets.' },
      { title: '99.9% Uptime & Sub-Second Latency', description: 'Enterprise SLA with redundant global edge infrastructure and automatic failover routing.' },
      { title: 'Granular Access Tokens & Scopes', description: 'IP whitelisting, role-based API keys, and enterprise security compliance.' },
      { title: 'Live Sandbox & Developer Console', description: 'Simulate message dispatch, test error codes, and debug delivery webhooks in real time.' },
    ],
    useCases: [
      { title: 'Automated CRM Lead Alerts', description: 'Trigger instant SMS and WhatsApp notifications whenever a new lead fills your website form.' },
      { title: 'E-commerce Order & Dispatch Sync', description: 'Send real-time dispatch updates, tracking URLs, and payment receipts from your ERP.' },
      { title: 'Fintech OTP & Verification', description: 'Embed sub-second two-factor authentication directly into your user login flows.' },
      { title: 'Automated Billing & Invoice Drips', description: 'Schedule recurring invoice payment reminders with 1-click payment links.' },
    ],
    benefits: [
      'Plug-and-play integration with 50+ enterprise CRMs',
      'Sub-500ms API response time with zero message queuing',
      'Unified API for SMS, RCS, WhatsApp, IVR & Voice',
      'Comprehensive developer documentation & interactive sandboxes',
      '24/7 dedicated engineering support & technical SLAs',
      '100% compliant with enterprise data protection standards',
    ],
    howItWorks: [
      { step: 1, title: 'Generate API Keys', description: 'Create production and sandbox API credentials from your Zion enterprise console.' },
      { step: 2, title: 'Select Channel & Payload', description: 'Use our single unified REST endpoint to send SMS, RCS, WhatsApp or Voice.' },
      { step: 3, title: 'Configure Webhooks', description: 'Subscribe to real-time delivery receipts, user responses, and inbound messages.' },
      { step: 4, title: 'Scale Infinitely', description: 'Process millions of automated requests with automatic rate-limit scaling.' },
    ],
    hasAPI: true,
    apiDescription: 'Unified RESTful API endpoints for SMS, RCS, WhatsApp, IVR, and Voice dispatch with full JSON schema documentation and SDK support.',
    ctaText: 'Access Developer Documentation →',
    metaTitle: 'Enterprise Communication APIs & CRM Integration | Zion Marketing',
    metaDescription: 'Developer-first REST APIs, CRM integrations (Salesforce, Zoho, HubSpot), and real-time messaging webhooks by Zion Marketing.',
  },
  'site-branding': {
    slug: 'site-branding',
    title: 'Real Estate Project Branding & Launch',
    tagline: 'From Project Identity to Sales Office — We Build the Complete Launch Experience',
    description: 'Complete real estate project branding, site hoardings, sales office experience design, marketing collaterals and digital launch campaigns.',
    heroDescription: 'From project naming and visual identity to sales office design, site branding and launch creatives, Zion Marketing creates a complete brand experience for real estate projects.',
    IconComponent: Building2,
    features: [],
    useCases: [],
    benefits: [],
    howItWorks: [],
    hasAPI: false,
    ctaText: 'Plan Your Project Launch →',
    metaTitle: 'Real Estate Project Branding & Launch | Zion Marketing',
    metaDescription: 'Complete real estate project branding, sales office design, site hoardings, and launch marketing by Zion Marketing.',
  }
};


/* ==========================================================================
   DEDICATED ENTERPRISE PRODUCT VIEWS (7 SUITES)
   ========================================================================== */

/* ── 1. WhatsApp Business API Dedicated View ── */
function WhatsAppPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('marketing');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappTypes = [
    {
      id: 'marketing',
      title: 'Marketing Messages',
      tag: 'Promotions & Offers',
      badge: 'High ROI',
      desc: 'Send personalized promotions, product announcements, festive offers, and back-in-stock alerts directly to customer WhatsApp inboxes.',
      features: ['Rich media cards (Images, Videos, PDF catalogs)', 'Custom CTA buttons (Buy Now, Visit Website)', 'Segmented targeted broadcasts with high CTR', 'Real-time campaign delivery & read telemetry'],
      stats: '45-60% Open Rate'
    },
    {
      id: 'utility',
      title: 'Utility & Transactional',
      tag: 'Order & Account Alerts',
      badge: 'Critical Delivery',
      desc: 'Deliver order confirmations, shipping updates, booking vouchers, policy renewals, and account statements with zero delivery delay.',
      features: ['Automated trigger via REST APIs & Webhooks', 'Structured template layout with dynamic variables', 'Delivery confirmation receipts within 2 seconds', 'Quick action reply buttons for order tracking'],
      stats: '99.9% Delivery Speed'
    },
    {
      id: 'service',
      title: 'Service & Support (Chatbots)',
      tag: '24/7 AI Automation',
      badge: '24/7 Support',
      desc: 'Deploy AI chatbots and live agent inbox routing to resolve 70%+ customer queries instantly without human intervention.',
      features: ['24/7 automated FAQ & workflow resolution', 'Seamless human-agent routing with CRM sync', 'Multi-lingual support capabilities', 'Interactive menu list & quick reply buttons'],
      stats: '70% Auto-Resolution'
    },
    {
      id: 'authentication',
      title: 'Authentication (WhatsApp OTP)',
      tag: 'Secure & Instant Logins',
      badge: 'Maximum Security',
      desc: 'Eliminate SMS OTP failures with instant WhatsApp verification codes featuring 1-tap copy-code buttons for effortless logins.',
      features: ['One-tap copy code button for mobile apps', 'Zero telecom DND delivery filtering issues', 'Sub-3-second end-to-end token delivery', 'Built-in carrier fallback for 100% guarantee'],
      stats: '< 3s OTP Latency'
    }
  ];

  const useCases = [
    { icon: ShoppingBag, sector: 'E-Commerce & Retail', title: 'Abandoned Cart Recovery & Order Updates', desc: 'Recover up to 28% of abandoned checkouts with automated cart recovery reminders, discount coupons, and direct product catalog links.' },
    { icon: Building2, sector: 'Real Estate & Property', title: 'Brochure Dispatch & Site Visit Booking', desc: 'Send interactive project brochures, floor plans, walkthrough videos, and allow prospective buyers to book site visits directly inside WhatsApp.' },
    { icon: ShieldCheck, sector: 'Banking & FinTech', title: 'Instant KYC, Statements & Account Alerts', desc: 'Provide secure mini-statements, transaction alerts, loan eligibility calculators, and end-to-end encrypted document collection.' },
    { icon: Clock, sector: 'Healthcare & Diagnostics', title: 'Report Delivery & Appointment Reminders', desc: 'Deliver lab test PDF reports instantly to patients and automate appointment booking reminders to reduce clinic no-shows by 40%.' },
    { icon: Globe, sector: 'Travel & Hospitality', title: 'Boarding Passes & Hotel Concierge', desc: 'Deliver digital boarding passes, booking confirmations, hotel check-in guides, and automate room service requests seamlessly.' },
    { icon: Users, sector: 'Education & EdTech', title: 'Admission Inquiries & Exam Schedules', desc: 'Engage prospective students with course details, automate fee payment links, and send class schedule reminders.' },
    { icon: Zap, sector: 'Automobile & Dealerships', title: 'Test Drive Scheduling & Service Alerts', desc: 'Allow buyers to schedule vehicle test drives, receive quotation PDFs, and get periodic automated service reminder alerts.' },
    { icon: Activity, sector: 'Logistics & Courier', title: 'Live Tracking & Delivery Slot Selection', desc: 'Send real-time shipment milestone updates and allow customers to reschedule delivery windows or change addresses with one click.' }
  ];

  const faqs = [
    { q: 'What is the difference between regular WhatsApp Business and WhatsApp Business API?', a: 'Regular WhatsApp Business App is designed for small individual businesses on a single phone with limited broadcast limits (256 contacts). WhatsApp Business API (WABA) is designed for medium-to-enterprise businesses, enabling multi-agent team inboxes, unlimited daily broadcasts, green tick verification, automated chatbot journeys, and seamless REST API integrations.' },
    { q: 'How does Zion Marketing help in getting the WhatsApp Green Tick Verification?', a: 'Zion Marketing manages the entire end-to-end Official Business Account (OBA) application directly with Meta. We assist in brand documentation, Meta Business Manager verification, media PR proofing, and submission to ensure the highest approval rate for the prestigious Green Checkmark.' },
    { q: 'How are WhatsApp Business API messages priced?', a: 'Meta uses a 24-hour conversation-based pricing model categorized into Marketing, Utility, Authentication, and Service conversations. Zion provides transparent, wholesale tier rates with zero hidden server maintenance fees and detailed CDR billing.' },
    { q: 'Can we integrate WhatsApp API with our existing CRM (Salesforce, Zoho, HubSpot)?', a: 'Yes. Zion WhatsApp Business API provides unified REST APIs, robust webhooks, and pre-built connectors for major CRMs (Salesforce, Zoho, HubSpot, LeadSquared, Custom ERPs) to sync leads, trigger automations, and log conversation histories automatically.' },
    { q: 'What is the message delivery rate and latency for WhatsApp OTPs?', a: 'WhatsApp messages bypass traditional telecom routing congestion and deliver within 1.5 to 3 seconds with a 99.8% delivery success rate, backed by high-availability tier-1 Meta Cloud infrastructure.' }
  ];

  const currentTabItem = whatsappTypes.find(t => t.id === activeTab) || whatsappTypes[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                OFFICIAL META BUSINESS PARTNER • GREEN TICK READY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                WhatsApp <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-emerald-300 to-[#25D366]">
                  Business API
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Engage over 2.7 billion active users with verified branded messaging, AI chatbots, catalog commerce, and multi-agent CRM workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Talk to WhatsApp Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-[#25D366]">98%</div>
                  <div className="text-xs text-blue-200/80 font-medium">Open Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">45-60%</div>
                  <div className="text-xs text-blue-200/80 font-medium">CTR on Rich Cards</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">&lt; 3s</div>
                  <div className="text-xs text-blue-200/80 font-medium">Delivery Latency</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative max-w-[320px] sm:max-w-[340px] drop-shadow-2xl">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#25D366]/20 to-[#FF6B00]/20 rounded-3xl blur-2xl -z-10"></div>
                <img
                  src={whatsappMockup}
                  alt="WhatsApp Business API Interactive Mobile Showcase"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE PRODUCT EXPERIENCE / CAPABILITY DEMO */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              See WhatsApp Business API in Action
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Explore how high-growth enterprises transform customer engagement across different message categories.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {whatsappTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === type.id ? "bg-zion-deep-blue text-white shadow-md shadow-blue-900/20" : "bg-white text-zion-dark-gray hover:text-zion-deep-blue border border-slate-200")}
              >
                <span>{type.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === type.id ? "bg-[#25D366] text-slate-900 font-black" : "bg-slate-100 text-slate-600")}>
                  {type.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTabItem.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTabItem.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTabItem.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTabItem.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Benchmark Metric</div>
                <div className="text-4xl font-black text-white">{currentTabItem.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Direct Tier-1 Meta cloud connection with zero intermediary hops.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-sm transition-all"
                >
                  <span>Deploy This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PLATFORM CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Enterprise Ready
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Why Global Brands Choose Zion WhatsApp API
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Engineered with carrier-grade reliability, compliance certifications, and deep marketing automation tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Official Green Tick Verification', desc: 'Build instant customer trust with Meta Official Business Account badge displayed alongside your verified brand logo.' },
              { icon: Bot, title: 'No-Code AI Chatbot Builder', desc: 'Design conversational customer support and lead qualification workflows with visual drag-and-drop triggers.' },
              { icon: Users, title: 'Multi-Agent Team Inbox', desc: 'Equip your sales and support agents with a collaborative dashboard, automated ticket routing, and canned replies.' },
              { icon: Zap, title: 'Broadcasts at Scale (Tier Unlimited)', desc: 'Send millions of verified promotional broadcasts per day with intelligent throughput pacing and dynamic variables.' },
              { icon: Code2, title: 'REST APIs & Webhooks', desc: 'Plug WhatsApp messaging into CRM, ERP, and payment systems using clean JSON endpoints and real-time webhook listeners.' },
              { icon: BarChart3, title: 'Real-Time Telemetry & CDR', desc: 'Access granular delivery reports, read rates, click-through rates, and opt-out analytics via live dashboard and export APIs.' }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/60 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zion-deep-blue mb-2">{card.title}</h3>
                <p className="text-zion-dark-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Sector Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Transforming Outcomes Across Every Industry
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Explore how leading Indian and global enterprises leverage Zion WhatsApp API to drive conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Implementation Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Go Live in 4 Simple Steps
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Fast-track Meta Business onboarding with Zion expert provisioning assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Meta Verification', desc: 'We assist in submitting your Business Manager documents for instant Meta verification & Green Tick approval.' },
              { step: '02', title: 'Number Provisioning', desc: 'Assign dedicated virtual or existing enterprise landline/mobile numbers to the WABA portal.' },
              { step: '03', title: 'API & Bot Setup', desc: 'Integrate our REST API endpoints, configure webhook triggers, or build visual automated chat flows.' },
              { step: '04', title: 'Launch & Scale', desc: 'Initiate targeted campaigns, monitor live delivery telemetry, and scale broadcast volumes effortlessly.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                Bank-Grade Protection
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                End-to-End Encrypted & Fully Compliant
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Zion WhatsApp Business API runs on ISO 27001 certified infrastructure with end-to-end encryption, automated opt-out scrubbing, and Indian data localization compliance.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-6 h-6 text-[#25D366] mx-auto mb-2" />
                <div className="text-xs font-bold">256-Bit Encrypted</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-[#25D366] mx-auto mb-2" />
                <div className="text-xs font-bold">ISO 27001 Certified</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-[#25D366] mx-auto mb-2" />
                <div className="text-xs font-bold">99.99% Cloud SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Clear Answers
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL HIGH-CONVERTING CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Ready to Launch on <span className="text-[#25D366]">WhatsApp Business API</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Speak with our Meta certified architects, test our interactive sandbox, and provision your verified business account today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 2. Meta Messaging (Instagram & Facebook) Dedicated View ── */
function MetaMessagingPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('instagram');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const metaChannels = [
    {
      id: 'instagram',
      title: 'Instagram DM Automation',
      tag: 'Story Mentions & DMs',
      badge: 'High Engagement',
      desc: 'Automatically reply to story mentions, post comments, and DMs instantly with interactive product links and discount coupon cards.',
      features: ['Automated Story Mention replies & welcome flows', 'Post comment-to-DM automated lead qualification', 'Interactive icebreakers & quick response buttons', 'Seamless live human agent handoff in team inbox'],
      stats: '85% Story Reply Rate'
    },
    {
      id: 'facebook',
      title: 'Facebook Messenger Engine',
      tag: 'Page & Ad Conversations',
      badge: 'Omnichannel CRM',
      desc: 'Turn Facebook business page visitors into sales pipeline with 24/7 automated FAQ chatbots and instant consultation schedulers.',
      features: ['Automated ad click to Messenger conversations', 'Visual product carousel displays & booking links', 'Sync conversational leads with Salesforce / HubSpot', 'Instant order status & ticket lookup automation'],
      stats: '4.2x Faster Response'
    },
    {
      id: 'ctwa',
      title: 'Click-to-WhatsApp (CTWA) Ads',
      tag: 'Paid Ads to 1-on-1 Chat',
      badge: 'Lowest CPL',
      desc: 'Run Facebook & Instagram ads that send warm prospects directly into a high-converting WhatsApp conversation with pre-filled prompts.',
      features: ['30-50% lower cost per qualified lead vs web forms', 'Instant automated greeting & brochure delivery', 'Ad attribution tracking & campaign ROI telemetry', 'Real-time sales rep routing for instant closing'],
      stats: '3.8x Higher Conversion'
    }
  ];

  const useCases = [
    { icon: Instagram, sector: 'D2C & Fashion Brands', title: 'Story Mention Discounts & Drop Alerts', desc: 'Engage followers who tag your brand in stories with exclusive instant discount promo codes and VIP collection links.' },
    { icon: Building2, sector: 'Real Estate Builders', title: 'Ad Click-to-WhatsApp Site Bookings', desc: 'Direct luxury property ad viewers straight into an interactive WhatsApp brochure & site visit scheduler.' },
    { icon: ShoppingBag, sector: 'Retail & Consumer Goods', title: 'Automated Post Comment-to-Cart DMs', desc: 'When users comment PRICE or BUY on your reels, instantly DM them direct checkout links.' },
    { icon: Users, sector: 'Coaching & EdTech', title: 'Webinar & Demo Registration Funnel', desc: 'Qualify students via interactive Messenger flows and send automated webinar calendar invites.' },
    { icon: PhoneCall, sector: 'Healthcare & Wellness', title: 'Consultation & Clinic Appointment Booking', desc: 'Enable prospective patients clicking social ads to choose appointment time slots inside Messenger.' },
    { icon: Globe, sector: 'Hospitality & Restaurants', title: 'Table Reservation & Menu Explorer', desc: 'Allow diners to view food menus, reserve tables, and redeem social promotion vouchers effortlessly.' },
    { icon: Zap, sector: 'Automobile Dealerships', title: 'VIP Test Drive & Price Quote Requests', desc: 'Capture social media inquiries, qualify vehicle preferences, and route hot leads to local dealers.' },
    { icon: Bot, sector: 'B2B SaaS & Services', title: 'Lead Qualification & Demo Scheduling', desc: 'Screen incoming social inquiries with smart AI bot questions before booking calls on sales reps calendars.' }
  ];

  const faqs = [
    { q: 'How does Meta Messaging differ from standard social media direct messaging?', a: 'Standard DMs require manual human typing on mobile apps. Zion Meta Messaging platform connects directly to the Meta Graph API, enabling automated keyword triggers, AI chatbots, multi-agent CRM routing, broadcast campaigns, and ad attribution tracking.' },
    { q: 'Can we automate replies when someone comments on our Instagram Reels or Posts?', a: 'Yes. You can configure comment-to-DM automations. Whenever a user types a specific keyword (e.g., LINK, PRICE, BROCHURE) on your post or reel, our bot instantly sends a personalized DM with the exact resource.' },
    { q: 'What is Click-to-WhatsApp (CTWA) and why is it superior to web landing pages?', a: 'Click-to-WhatsApp ads open a pre-filled WhatsApp conversation instead of directing users to a slow mobile landing page. This eliminates form-drop off, captures verified phone numbers instantly, and boosts lead conversion by up to 3.8x.' },
    { q: 'Can our sales team reply manually to customer inquiries inside one shared inbox?', a: 'Yes. Zion provides a unified multi-agent team inbox where agents can collaborate, add internal notes, assign conversation tags, and transfer chats seamlessly between departments.' },
    { q: 'Is Zion Meta Messaging integration fully compliant with Meta policies?', a: 'Yes. Zion uses official Meta Graph APIs with strict adherence to data privacy, 24-hour messaging windows, and rate limits to ensure your business accounts stay 100% compliant.' }
  ];

  const currentTab = metaChannels.find(c => c.id === activeTab) || metaChannels[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1877F2_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#E1306C]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse"></span>
                INSTAGRAM • FACEBOOK MESSENGER • CLICK-TO-WHATSAPP
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Meta Messaging <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA05C]">
                  Automation Suite
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Convert social media engagement into high-velocity sales pipelines. Automate Instagram DMs, Facebook Messenger conversations, and Click-to-WhatsApp ad funnels.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Scale Meta Messaging</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>Explore Social Funnels</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-white">3.8x</div>
                  <div className="text-xs text-blue-200/80 font-medium">Lead Conversion</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">-45%</div>
                  <div className="text-xs text-blue-200/80 font-medium">Cost Per Acquisition</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1877F2]">&lt; 1s</div>
                  <div className="text-xs text-blue-200/80 font-medium">Instant DM Response</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-md w-full space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E1306C] via-[#FD1D1D] to-[#F56040] flex items-center justify-center text-white">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Instagram DM Automation</div>
                      <div className="text-xs text-emerald-400 font-semibold">● Live Bot Active</div>
                    </div>
                  </div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded text-blue-200">Meta API</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 text-blue-100 max-w-[80%]">
                    User: "Interested in the 3BHK layout brochure!"
                  </div>
                  <div className="p-3 rounded-xl bg-zion-orange text-white max-w-[85%] ml-auto shadow-md font-medium">
                    Zion Bot: "Hi Rahul! Here is the complete PDF brochure with floor plans and exclusive pre-launch pricing!"
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 flex items-center justify-between">
                    <span>📄 Brochure_Siddha_Sky.pdf</span>
                    <span className="font-bold">[DOWNLOAD]</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                  <span>⚡ Instant Lead Captured</span>
                  <span className="font-bold text-zion-orange">Synced to CRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS SHOWCASE */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Channel Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Engage Audiences on Every Meta Touchpoint
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              From Instagram comments to Facebook Messenger and Click-to-WhatsApp ads, capture leads wherever they browse.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {metaChannels.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === c.id ? "bg-zion-deep-blue text-white shadow-md" : "bg-white text-zion-dark-gray border border-slate-200")}
              >
                <span>{c.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === c.id ? "bg-zion-orange text-white font-black" : "bg-slate-100 text-slate-600")}>
                  {c.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTab.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTab.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTab.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTab.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-zion-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-zion-orange font-bold">Performance Benchmark</div>
                <div className="text-4xl font-black text-white">{currentTab.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Direct official Meta webhook listeners with sub-second response times.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 btn-orange-primary font-bold rounded-lg text-sm"
                >
                  <span>Activate This Channel</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Growth Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Complete Meta Conversational Marketing Stack
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Everything you need to automate conversations, qualify inbound buyers, and sync real-time CRM records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: 'Comment-to-DM Automation', desc: 'Automatically reply to post & reel comments with personalized direct messages containing product links and discount codes.' },
              { icon: Sparkles, title: 'Story Mention Auto-Rewards', desc: 'Trigger instant DM vouchers and thank-you notes whenever a customer tags your brand handle in their story.' },
              { icon: Users, title: 'Unified Multi-Agent Inbox', desc: 'Manage Instagram DMs and Facebook messages in one shared collaborative workspace with tag management and agent routing.' },
              { icon: TrendingUp, title: 'Click-to-WhatsApp Ad Funnels', desc: 'Dramatically reduce customer acquisition costs by routing paid social ad traffic directly into instant WhatsApp conversations.' },
              { icon: Database, title: 'CRM & Lead Management Sync', desc: 'Automatically push captured lead names, phone numbers, and conversation transcripts into Salesforce, Zoho, and HubSpot.' },
              { icon: BarChart3, title: 'Ad Attribution & Analytics', desc: 'Track which specific Facebook / Instagram ad campaign generated every lead and calculate precise return on ad spend (ROAS).' }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100/60 text-zion-orange flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zion-deep-blue mb-2">{card.title}</h3>
                <p className="text-zion-dark-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Proven Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              How Market Leaders Drive Social Conversions
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Discover how leading brands convert casual social scrollers into high-value paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Fast Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Connect & Launch in 4 Easy Steps
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Integrate your brand Meta assets securely without touching complex code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Accounts', desc: 'Authenticate your Instagram Business profile and Facebook Page via secure OAuth.' },
              { step: '02', title: 'Set Bot Triggers', desc: 'Define custom keywords for comment replies, story mentions, and instant welcome DMs.' },
              { step: '03', title: 'Map Lead Routing', desc: 'Sync qualified lead data directly with your CRM and configure live agent team inboxes.' },
              { step: '04', title: 'Scale Campaigns', desc: 'Launch high-performing social ad funnels and monitor live ROAS & response telemetry.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                Official Meta API Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                100% Policy Compliant & Safe
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Every automation runs strictly on official Meta Graph endpoints with automated 24h conversation tracking, end-to-end encryption, and full protection against account shadowbans.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-6 h-6 text-[#1877F2] mx-auto mb-2" />
                <div className="text-xs font-bold">Official Meta API</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-zion-orange mx-auto mb-2" />
                <div className="text-xs font-bold">Zero Ban Guarantee</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-bold">99.9% Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Common Questions
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1877F2_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Turn Social Followers into <span className="text-zion-orange">Paying Customers</span>
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Schedule a strategy call with our social commerce architects and see live Meta automation in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Launch Meta Messaging</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 3. IVR Solutions Dedicated View ── */
function IvrPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('multi-level');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const ivrTypes = [
    {
      id: 'multi-level',
      title: 'Multi-Level Intelligent IVR',
      tag: 'Hierarchical DTMF Routing',
      badge: 'Zero Dropoff',
      desc: 'Guide callers through intuitive multi-branch menu options (Press 1 for Sales, Press 2 for Support) with seamless CRM agent routing.',
      features: ['Unlimited depth voice menu navigation trees', 'Skill-based and round-robin agent distribution', 'Custom studio recorded multilingual voice prompts', 'Real-time agent queue & caller hold telemetry'],
      stats: '< 1.2s Menu Latency'
    },
    {
      id: 'self-service',
      title: 'Self-Service & Payment IVR',
      tag: 'Automated Account Lookup',
      badge: '24/7 Resolution',
      desc: 'Allow callers to check account balances, payment dues, order tracking numbers, and ticket statuses without talking to an agent.',
      features: ['Real-time REST API CRM database lookups', 'PCI-DSS compliant DTMF keypad payment gateway', 'Automated SMS / WhatsApp receipt trigger after call', 'Bilingual text-to-speech dynamic readouts'],
      stats: '68% Self-Service Rate'
    },
    {
      id: 'virtual-receptionist',
      title: 'Virtual Cloud Receptionist',
      tag: 'Smart Number Management',
      badge: 'Single Brand Number',
      desc: 'Publish one prestigious 1800 Toll-Free or Virtual Landline number and route callers intelligently to distributed remote teams.',
      features: ['Centralized 1800 Toll-Free & DID number hosting', 'Time-of-day & holiday automated routing rules', 'Call recording with cloud storage & encryption', 'Instant missed-call SMS alert to sales reps'],
      stats: '99.99% Call Uptime'
    }
  ];

  const useCases = [
    { icon: Building2, sector: 'Real Estate Builders', title: 'Inbound Project Inquiries & CP Helpline', desc: 'Direct potential homebuyers to specific tower sales executives and manage dedicated channel partner helpline numbers.' },
    { icon: Landmark, sector: 'Banking & Financial', title: 'Card Blocking, Balance & OTP IVR', desc: 'Provide 24/7 automated emergency debit/credit card blocking, loan EMI schedules, and telebanking verification.' },
    { icon: ShoppingBag, sector: 'E-Commerce & Retail', title: 'Order Tracking & Return Authorizations', desc: 'Enable customers to track package delivery status via DTMF order ID entry and automate return pickup requests.' },
    { icon: Stethoscope, sector: 'Hospitals & Healthcare', title: 'Department Routing & Doctor Booking', desc: 'Route emergency ambulance calls instantly and allow patients to schedule appointments with specific specialist clinics.' },
    { icon: GraduationCap, sector: 'Education & Universities', title: 'Admissions & Examination Hotline', desc: 'Handle thousands of admission inquiries concurrently during peak academic intake cycles with zero busy tones.' },
    { icon: Car, sector: 'Automobile Service Centers', title: 'Service Status & Roadside Assistance', desc: 'Automate vehicle service readiness queries and dispatch 24/7 emergency roadside towing assistance.' },
    { icon: Plane, sector: 'Travel & Airlines', title: 'Flight Status & Itinerary Concierge', desc: 'Provide real-time gate and flight delay information, ticket cancellation prompts, and baggage helpdesk routing.' },
    { icon: Headphones, sector: 'Enterprise SaaS & IT', title: 'Technical Support Escalation Matrix', desc: 'Categorize severity-1 enterprise tickets and route calls immediately to on-call engineering specialists.' }
  ];

  const faqs = [
    { q: 'How quickly can we set up a multi-level IVR system with Zion?', a: 'Standard IVR flows with virtual numbers and text-to-speech prompts can be deployed within 24 hours. Custom studio recorded voice trees and CRM API database integrations take 2-3 business days.' },
    { q: 'Can the IVR look up live data from our backend CRM or database during the call?', a: 'Yes. Zion IVR engine supports dynamic HTTP/REST API webhooks. When a caller enters their Order ID or Account Number on the keypad, our system fetches the status in real time and speaks it out via text-to-speech.' },
    { q: 'Can we record all inbound and outbound calls for quality audit?', a: 'Yes. 100% cloud call recording is included with AES-256 encryption. Recordings are accessible via the secure Zion web portal or downloadable via automated S3 sync APIs.' },
    { q: 'What happens when all sales agents are busy on other calls?', a: 'You can configure intelligent hold queues with custom hold music, queue position announcements, or trigger an automated callback request that alerts agents via CRM.' },
    { q: 'Can we get an 1800 Toll-Free number or local city landline number?', a: 'Yes. Zion provisions National 1800 Toll-Free numbers as well as virtual landline DID numbers across all major Indian telecom circles (Mumbai, Delhi, Bangalore, etc.).' }
  ];

  const currentTab = ivrTypes.find(t => t.id === activeTab) || ivrTypes[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-zion-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-zion-orange animate-pulse"></span>
                ENTERPRISE VOICE ARCHITECTURE • 10,000+ CONCURRENT CALLS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Smart Cloud <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA05C]">
                  IVR Solutions
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Transform inbound customer phone calls into professional, automated journeys. Deploy multi-level voice trees, intelligent agent routing, and CRM call telemetry.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Build Your IVR Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>Explore Voice Trees</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-white">99.99%</div>
                  <div className="text-xs text-blue-200/80 font-medium">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">10,000+</div>
                  <div className="text-xs text-blue-200/80 font-medium">Concurrent Channels</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">&lt; 1s</div>
                  <div className="text-xs text-blue-200/80 font-medium">DTMF Response</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-md w-full space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zion-orange flex items-center justify-center text-white shadow-md">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Zion Cloud IVR Flow</div>
                      <div className="text-xs text-emerald-400 font-semibold">● 1800-ZION-CALL Active</div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold">LIVE CALL</span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/10 text-blue-100 flex items-center justify-between">
                    <span>🔊 "Welcome to Zion Luxury Realty"</span>
                    <span className="text-zion-orange font-bold">[MENU]</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 text-blue-200 pl-4 border-l-2 border-zion-orange">
                    ➜ Press 1: Luxury 3BHK Residences
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 text-blue-200 pl-4 border-l-2 border-blue-400">
                    ➜ Press 2: Book On-Site Experience
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold pl-4 border-l-2 border-emerald-400 flex items-center justify-between">
                    <span>Caller Pressed '1' ➜ Sales Executive Connected</span>
                    <span>[RECORDING]</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                  <span>⏱️ Duration: 02:45 min</span>
                  <span className="font-bold text-zion-orange">CRM Lead #84920 Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS SHOWCASE */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Voice Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Explore Our Enterprise IVR Capabilities
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              From multi-branch DTMF trees to automated database lookup IVRs and cloud toll-free receptionists.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {ivrTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === t.id ? "bg-zion-deep-blue text-white shadow-md" : "bg-white text-zion-dark-gray border border-slate-200")}
              >
                <span>{t.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === t.id ? "bg-zion-orange text-white font-black" : "bg-slate-100 text-slate-600")}>
                  {t.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-orange-50 text-zion-orange border border-orange-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTab.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTab.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTab.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTab.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-zion-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-zion-orange font-bold">Performance Benchmark</div>
                <div className="text-4xl font-black text-white">{currentTab.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Carrier-grade PRI & SIP trunking with redundant telecom interconnects.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 btn-orange-primary font-bold rounded-lg text-sm"
                >
                  <span>Deploy This IVR Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (6 Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Carrier Grade Voice
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Built for High-Volume Enterprise Calling
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Reliable telecommunication infrastructure backed by automatic failovers and deep CRM analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sliders, title: 'Visual Drag-and-Drop IVR Builder', desc: 'Construct complex voice flow trees, greeting prompts, and fallback conditions without writing telecom code.' },
              { icon: PhoneForwarded, title: 'Smart Skill-Based Routing', desc: 'Direct calls to agents based on language preference, geographic location, VIP customer status, or agent availability.' },
              { icon: Database, title: 'Real-Time CRM & Webhook Sync', desc: 'Log complete Call Detail Records (CDR), duration, agent notes, and recordings directly into your CRM.' },
              { icon: Mic, title: 'Studio-Grade Multi-Lingual Prompts', desc: 'Choose from professionally recorded human voiceovers or dynamic high-fidelity neural text-to-speech in 12+ languages.' },
              { icon: ShieldCheck, title: '100% Encrypted Call Recording', desc: 'Store high-definition audio recordings in secure cloud storage with granular role-based access permissions.' },
              { icon: BarChart3, title: 'Live Agent Telemetry & Analytics', desc: 'Monitor active call queues, agent talk times, call abandonment rates, and peak hour trends in real time.' }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100/60 text-zion-orange flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zion-deep-blue mb-2">{card.title}</h3>
                <p className="text-zion-dark-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Enterprise Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Powering Inbound Voice Across Industries
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              How leading organizations handle millions of customer calls effortlessly every month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Fast Provisioning
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Deploy Your Enterprise IVR in 4 Steps
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              From number allocation to audio prompt recording and CRM integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Number Allocation', desc: 'Select dedicated 1800 Toll-Free or Virtual Landline DID numbers in your preferred city.' },
              { step: '02', title: 'Flow & Audio Design', desc: 'Design your DTMF menu structure and upload studio voiceovers or text-to-speech scripts.' },
              { step: '03', title: 'Agent & CRM Setup', desc: 'Add agent extension numbers, configure hunt groups, and connect CRM webhook URLs.' },
              { step: '04', title: 'Go Live & Monitor', desc: 'Publish your helpline number and track live calls, recordings, and metrics on your dashboard.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                DOT & TRAI Compliant Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Carrier-Grade SLA & High Availability
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Direct telecom interconnects across Tier-1 telcos in India with redundant PRI lines, automatic SIP trunk failover, and Indian data privacy compliance.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-6 h-6 text-zion-orange mx-auto mb-2" />
                <div className="text-xs font-bold">Encrypted SIP Trunks</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-bold">TRAI Compliant</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-bold">99.99% Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Ready to Automate Inbound Calls with <span className="text-zion-orange">Smart IVR</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Speak with our voice architects to configure custom DTMF trees, test live audio flows, and launch within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Get Your IVR Number</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 4. OBD Voice Calls Dedicated View ── */
function ObdVoicePageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('promotional');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const obdTypes = [
    {
      id: 'promotional',
      title: 'Promotional Voice Broadcasts',
      tag: 'High-Volume Outreach',
      badge: '1M+ Calls/Day',
      desc: 'Deliver pre-recorded audio announcements, event invitations, flash sales, and political campaign broadcasts to millions simultaneously.',
      features: ['High-throughput carrier trunks delivering 50,000 calls/min', 'Dynamic scheduled dialing windows with DND filtering', 'Interactive DTMF keypress capture (Press 1 to connect to agent)', 'Granular pulse-based billing & live campaign dashboard'],
      stats: '82% Answer Rate'
    },
    {
      id: 'transactional',
      title: 'Transactional & Reminder Calls',
      tag: 'Critical Voice Alerts',
      badge: 'Priority SLA',
      desc: 'Automate payment reminder calls, EMI alerts, appointment confirmations, and critical service notifications with real-time text-to-speech.',
      features: ['Dynamic speech synthesis for names, amounts, and dates', 'Intelligent automated retries for unanswered calls', 'Instant REST API trigger directly from your ERP/CRM', 'Detailed Call Detail Records (CDR) with listen duration'],
      stats: '99.4% Delivery Success'
    },
    {
      id: 'dtmf-survey',
      title: 'Interactive Voice Surveys & Feedback',
      tag: 'Automated CSAT Polling',
      badge: 'Instant Feedback',
      desc: 'Capture real-time customer feedback (e.g., Press 1-5 to rate our service) and trigger follow-up SMS/WhatsApp links automatically.',
      features: ['Multi-question automated interactive survey flows', 'Real-time response aggregation and webhook push to CRM', 'Automated agent callback trigger for low ratings (< 3 stars)', 'Custom regional language voice options'],
      stats: '4.8x Higher Survey Response'
    }
  ];

  const useCases = [
    { icon: Building2, sector: 'Real Estate Launches', title: 'Pre-Launch Teaser & Site Visit Invites', desc: 'Broadcast exclusive audio invitations for project launches and allow prospective buyers to press 1 to speak with sales.' },
    { icon: Landmark, sector: 'Banking & FinTech', title: 'EMI Payment & Overdue Loan Reminders', desc: 'Automate gentle voice reminder calls before EMI due dates with dynamic customer names and amounts.' },
    { icon: ShoppingBag, sector: 'E-Commerce & Delivery', title: 'Cash on Delivery (COD) Confirmation', desc: 'Confirm high-value COD orders via automated voice calls to eliminate fake orders and reduce RTO by up to 35%.' },
    { icon: Stethoscope, sector: 'Hospitals & Diagnostics', title: 'Appointment Reminders & Health Camps', desc: 'Notify patients about scheduled appointments and broadcast announcements for free community health checkup camps.' },
    { icon: Users, sector: 'Political & Social Campaigns', title: 'Voter Engagement & Event Announcements', desc: 'Reach entire constituency demographics with personalized voice messages from leadership figures.' },
    { icon: GraduationCap, sector: 'Schools & EdTech', title: 'Attendance Alerts & Fee Reminders', desc: 'Deliver automated morning student absence alerts to parents and send school fee payment due reminders.' },
    { icon: Car, sector: 'Automobile Service', title: 'Scheduled Maintenance Due Alerts', desc: 'Remind car owners when their periodic service is due and allow them to schedule a service slot via DTMF.' },
    { icon: Globe, sector: 'Event Organizers', title: 'Webinar & Conference Attendance Boost', desc: 'Trigger a quick 15-minute voice call reminder before live events to maximize show-up rates.' }
  ];

  const faqs = [
    { q: 'How many voice calls can Zion OBD broadcast per minute?', a: 'Zion OBD infrastructure handles over 50,000 concurrent calls per minute across multiple Tier-1 telecom PRI lines, enabling you to complete million-number campaigns in under 2 hours.' },
    { q: 'How does DTMF keypress work in OBD voice calls?', a: 'During the call, you can prompt the listener (e.g., Press 1 to speak to our property advisor). If the user presses 1, our system instantly bridges the call to your live sales team or registers the response in CRM.' },
    { q: 'How does pricing work for OBD voice calls?', a: 'OBD is billed on a pulse duration basis (typically 15-second or 30-second pulses). You only pay for answered calls, with zero charges for invalid, switched-off, or ringing-not-answered numbers.' },
    { q: 'Can we personalize each voice call with customer names and dynamic amounts?', a: 'Yes. Our Text-to-Speech (TTS) OBD API allows you to inject dynamic customer names, EMI amounts, due dates, and policy numbers dynamically inside the voice template.' },
    { q: 'Does Zion OBD comply with TRAI telecom regulations and DND guidelines?', a: 'Yes. Zion OBD platform features built-in automated TRAI DND scrubbers, strict dialing time window controls (9 AM to 9 PM), and registered telecom sender headers to ensure 100% legal compliance.' }
  ];

  const currentTab = obdTypes.find(t => t.id === activeTab) || obdTypes[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-zion-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-zion-orange animate-pulse"></span>
                HIGH-THROUGHPUT OUTBOUND VOICE • 50,000 CALLS/MIN
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                OBD Voice Calls & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA05C]">
                  Voice Broadcasting
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Deliver automated voice broadcasts, payment reminders, and interactive DTMF surveys to millions in minutes with carrier-grade delivery reliability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Launch Voice Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>Explore OBD Types</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-white">50K+</div>
                  <div className="text-xs text-blue-200/80 font-medium">Calls Per Minute</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">82%</div>
                  <div className="text-xs text-blue-200/80 font-medium">Average Answer Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-blue-200/80 font-medium">Answered Billing Only</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-md w-full space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zion-orange flex items-center justify-center text-white shadow-md">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">OBD Broadcast Dispatcher</div>
                      <div className="text-xs text-emerald-400 font-semibold">● 100,000 Queue Active</div>
                    </div>
                  </div>
                  <span className="text-xs bg-zion-orange text-white px-2.5 py-1 rounded-full font-bold">50K TPS</span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/10 text-blue-100 flex items-center justify-between">
                    <span>📡 Campaign: Festive_VIP_Launch</span>
                    <span className="text-emerald-400 font-bold">88.4% Picked</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 text-blue-200 pl-4 border-l-2 border-zion-orange">
                    🔊 Audio: "Press 1 to speak with project manager"
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold pl-4 border-l-2 border-emerald-400 flex items-center justify-between">
                    <span>DTMF '1' Captured: 4,219 Callers</span>
                    <span>[CONNECTED]</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                  <span>📊 Answered: 88,410 / 100,000</span>
                  <span className="font-bold text-zion-orange">Zero Failed Hops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS SHOWCASE */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Broadcasting Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Explore Our Outbound Voice Categories
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Tailored outbound dialing capabilities for high-volume promotions, automated reminders, and interactive feedback.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {obdTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === t.id ? "bg-zion-deep-blue text-white shadow-md" : "bg-white text-zion-dark-gray border border-slate-200")}
              >
                <span>{t.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === t.id ? "bg-zion-orange text-white font-black" : "bg-slate-100 text-slate-600")}>
                  {t.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-orange-50 text-zion-orange border border-orange-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTab.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTab.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTab.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTab.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-zion-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-zion-orange font-bold">Benchmark Metric</div>
                <div className="text-4xl font-black text-white">{currentTab.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Direct PRI carrier interconnection with automated multi-try retry logic.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 btn-orange-primary font-bold rounded-lg text-sm"
                >
                  <span>Deploy OBD Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (6 Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Enterprise Voice Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Engineered for Massive Outbound Scale
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Broadcasting technology that ensures high pick-up rates and zero telecom congestion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: '50,000+ Calls Per Minute Capacity', desc: 'Deploy massive multi-million voice campaigns with dynamic load-balancing across tier-1 telecom operator switches.' },
              { icon: Mic, title: 'Text-to-Speech (TTS) Personalization', desc: 'Dynamically insert customer names, payment due amounts, and account dates directly into speech templates.' },
              { icon: PhoneForwarded, title: 'Instant Live Agent Call Bridging', desc: 'When a customer presses a DTMF key (e.g. Press 1), instantly transfer the live call to your sales reps phone.' },
              { icon: RefreshCw, title: 'Intelligent Retry Logic Engine', desc: 'Automatically retry unanswered, busy, or temporarily out-of-coverage numbers at customized intervals.' },
              { icon: ShieldCheck, title: 'Automated DND & TRAI Scrubbing', desc: 'Built-in real-time DND filtering and automated compliance with Indian telecom regulatory calling windows.' },
              { icon: BarChart3, title: 'Detailed Audio CDR Telemetry', desc: 'Track precise call answer timestamps, audio listening duration, DTMF keys pressed, and export Excel/CSV reports.' }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100/60 text-zion-orange flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zion-deep-blue mb-2">{card.title}</h3>
                <p className="text-zion-dark-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Proven Results Across Indian Enterprises
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              How leading brands maximize reach and customer response through automated voice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Launch an OBD Broadcast in 4 Steps
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              From audio recording upload to contact list dispatch and live telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload Audio File', desc: 'Upload your WAV/MP3 recording or type text for automated multi-lingual TTS voice generation.' },
              { step: '02', title: 'Upload Numbers', desc: 'Import recipient phone numbers via CSV, Excel, or trigger via REST API endpoints.' },
              { step: '03', title: 'Configure DTMF Keys', desc: 'Set up keypress action rules for live agent transfer or automated confirmation logging.' },
              { step: '04', title: 'Dispatch & Track', desc: 'Schedule or trigger immediate broadcasting with live answer rates and duration reporting.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                TRAI & Telecom Certified
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                100% Compliant & Answered-Only Billing
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Zion OBD platform guarantees zero wastage with strict answered-only pulse billing, automatic DND filtering, and certified carrier routes.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-zion-orange mx-auto mb-2" />
                <div className="text-xs font-bold">Answered Billing</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-bold">TRAI DND Compliant</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-bold">50K TPS Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Ready to Broadcast at Scale with <span className="text-zion-orange">OBD Voice Calls</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Consult our voice communication specialists, test custom audio clips, and start reaching millions within hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Get Started with OBD</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 5. SMPP Connectivity Dedicated View ── */
function SmppPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('smpp34');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const smppTypes = [
    {
      id: 'smpp34',
      title: 'Carrier SMPP v3.4 Gateway',
      tag: 'Carrier-Grade Protocol',
      badge: '5,000+ TPS',
      desc: 'Connect your enterprise SMSC or message broker directly to Zion high-throughput SMS gateway via standard Short Message Peer-to-Peer v3.4 protocol.',
      features: ['Dual transmitter / receiver and transceiver bind support', 'Sub-millisecond PDU submit_sm response latency', 'Direct Tier-1 Indian & Global telco SMSC routing', 'Automatic round-robin bind failover architecture'],
      stats: '5,000+ TPS / Bind'
    },
    {
      id: 'active-active',
      title: 'Active-Active High Availability',
      tag: 'Geographic Redundancy',
      badge: '99.999% SLA',
      desc: 'Deploy resilient multi-session SMPP binds connected to geographically separated data centers (Mumbai & Hyderabad) with zero downtime.',
      features: ['Automated heartbeat enquire_link health checks', 'Zero packet loss during telecom network maintenance', 'Dynamic throttle pacing with adaptive windowing', 'Sub-second automatic traffic re-routing'],
      stats: '99.999% Gateway SLA'
    },
    {
      id: 'dlt-telemetry',
      title: 'Real-Time DLT & DLR Streaming',
      tag: 'Enterprise Telemetry',
      badge: 'Real-Time DLR',
      desc: 'Receive carrier delivery receipts (deliver_sm) asynchronously in real time with comprehensive DLT Entity & Header ID validation.',
      features: ['Instant delivery report streaming back to your SMSC', 'Native DLT Principal Entity & Template ID verification', 'Detailed error code mapping (DND, Absent, Expired, Rejected)', 'Custom throughput prioritization for high-stakes OTP traffic'],
      stats: '< 100ms DLR Latency'
    }
  ];

  const useCases = [
    { icon: Landmark, sector: 'Banking & Core Payment Gateways', title: 'High-Velocity Card Transaction OTPs', desc: 'Deliver millions of banking transaction OTPs with sub-2-second latency and zero packet queue congestion.' },
    { icon: Server, sector: 'Telecom Aggregators & Resellers', title: 'Wholesale Traffic Aggregation', desc: 'Aggregate billions of SMS messages monthly across multiple enterprise clients with custom TPS allocation.' },
    { icon: Building2, sector: 'FinTech & Stock Brokers', title: 'Trading Alerts & Market Margin Notices', desc: 'Broadcast instant trade execution confirmations and price alert notifications during high market volatility.' },
    { icon: ShieldCheck, sector: 'Government & National Portals', title: 'Citizen Service & Aadhaar OTP Dispatch', desc: 'Handle massive nationwide authentication spikes during national census and government scheme drives.' },
    { icon: ShoppingBag, sector: 'Global E-Commerce Platforms', title: 'Global Delivery & Order Flash Sales', desc: 'Process massive flash-sale order updates across global carrier networks with automated country routing.' },
    { icon: Bot, sector: 'Enterprise SaaS Platforms', title: 'Multi-Tenant Messaging Engine', desc: 'Power white-labeled SMS capabilities inside your SaaS application with dedicated SMPP credentials.' },
    { icon: Activity, sector: 'Healthcare & Emergency Services', title: 'Critical Disaster & Hospital Alerts', desc: 'Deliver high-priority emergency notifications with 99.999% carrier route delivery guarantees.' },
    { icon: Globe, sector: 'International A2P Routing', title: 'Global Cross-Border SMS Routing', desc: 'Terminate A2P SMS traffic into 190+ countries with optimized LCR (Least Cost Routing) pathways.' }
  ];

  const faqs = [
    { q: 'What TPS (Transactions Per Second) does Zion SMPP gateway support?', a: 'Standard enterprise binds start at 500 TPS and scale seamlessly up to 5,000+ TPS per bind. For wholesale aggregators and major banks, multi-bind configurations support 20,000+ TPS aggregate throughput.' },
    { q: 'What bind modes are supported on Zion SMPP server?', a: 'Zion SMPP v3.4 server supports Transmitter (TX), Receiver (RX), and Transceiver (TRX) bind modes with asynchronous windowing up to 100 concurrent PDUs.' },
    { q: 'How does Zion handle Indian DLT compliance over SMPP?', a: 'Our SMPP engine automatically parses and validates optional TLV parameters for DLT Principal Entity ID (PE_ID) and Template ID, ensuring 100% compliance with TRAI regulations.' },
    { q: 'What is the server latency and DLR delivery speed?', a: 'Zion server responds to submit_sm PDUs within 2 to 5 milliseconds. Carrier delivery receipts (deliver_sm) are streamed asynchronously back to your system within 100ms of carrier receipt.' },
    { q: 'Do you provide test SMPP credentials and sandbox access?', a: 'Yes. Our technical team provisions dedicated sandbox SMPP host, port, system_id, and password credentials within 2 hours for end-to-end PDU testing.' }
  ];

  const currentTab = smppTypes.find(t => t.id === activeTab) || smppTypes[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-zion-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-zion-orange animate-pulse"></span>
                CARRIER GRADE SMPP v3.4 • 5,000+ TPS / BIND
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                SMPP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA05C]">
                  Connectivity
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Direct carrier-grade SMPP v3.4 protocol connection for banks, aggregators, and enterprise SMSCs requiring ultra-high throughput and sub-millisecond PDU latency.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Request SMPP Sandbox Binds</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>View Protocol Specs</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-white">5,000+</div>
                  <div className="text-xs text-blue-200/80 font-medium">TPS Per Bind</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">&lt; 3ms</div>
                  <div className="text-xs text-blue-200/80 font-medium">PDU Submit Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">99.999%</div>
                  <div className="text-xs text-blue-200/80 font-medium">High Availability SLA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-md w-full space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zion-orange flex items-center justify-center text-white shadow-md">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Zion SMPP v3.4 Gateway</div>
                      <div className="text-xs text-emerald-400 font-semibold">● Active-Active Bind Established</div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold">CONNECTED</span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/10 text-blue-100 flex items-center justify-between">
                    <span>⚡ BIND_TRANSCEIVER</span>
                    <span className="text-emerald-400 font-bold">ESME_ROK</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 text-blue-200 pl-4 border-l-2 border-zion-orange">
                    SUBMIT_SM (seq=184920) ➜ TPS: 4,850/s
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold pl-4 border-l-2 border-emerald-400 flex items-center justify-between">
                    <span>DELIVER_SM (DLR Received)</span>
                    <span>[&lt; 42ms]</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                  <span>🔒 TLS Encrypted Link</span>
                  <span className="font-bold text-zion-orange">Direct Telco SMSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS SHOWCASE */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Protocol Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Explore Our SMPP Infrastructure
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Engineered with carrier-level routing algorithms, active-active server redundancy, and instant DLT validation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {smppTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === t.id ? "bg-zion-deep-blue text-white shadow-md" : "bg-white text-zion-dark-gray border border-slate-200")}
              >
                <span>{t.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === t.id ? "bg-zion-orange text-white font-black" : "bg-slate-100 text-slate-600")}>
                  {t.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-orange-50 text-zion-orange border border-orange-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTab.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTab.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTab.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTab.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-zion-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-zion-orange font-bold">Benchmark Capacity</div>
                <div className="text-4xl font-black text-white">{currentTab.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Dual carrier trunking with sub-millisecond socket turnaround times.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 btn-orange-primary font-bold rounded-lg text-sm"
                >
                  <span>Provision SMPP Binds</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (6 Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              High-Throughput Gateway
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Why Tier-1 Banks & Aggregators Choose Zion SMPP
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Reliable telecommunication infrastructure built for ultra-high transaction velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: '5,000+ TPS Scalability Per Bind', desc: 'Sustain continuous peak-load throughput without queue backpressure or connection drops.' },
              { icon: Server, title: 'Active-Active Redundant Data Centers', desc: 'Geographically separated data center nodes ensure uninterrupted message delivery even during carrier maintenance.' },
              { icon: ShieldCheck, title: 'Native DLT Compliance Parsing', desc: 'Automatic validation of DLT Principal Entity and Template IDs directly from SMPP optional TLV parameters.' },
              { icon: Network, title: 'Full SMPP v3.4 PDU Compatibility', desc: 'Supports submit_sm, deliver_sm, enquire_link, submit_multi, and data_sm operations with asynchronous windowing.' },
              { icon: Lock, title: 'IP Whitelisting & TLS Encryption', desc: 'Bank-grade network security with IP address filtering, VPN tunnel interconnects, and TLS encrypted sessions.' },
              { icon: BarChart3, title: 'Asynchronous DLR Streaming Engine', desc: 'Receive real-time carrier delivery status callbacks with sub-100ms turnaround directly into your SMSC.' }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100/60 text-zion-orange flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zion-deep-blue mb-2">{card.title}</h3>
                <p className="text-zion-dark-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Enterprise Mission Critical
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Powering India's Largest Message Volumes
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              How financial institutions and telecom aggregators handle billions of messages monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Interconnection Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Connect to SMPP in 4 Simple Steps
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Fast-track your telecom gateway provisioning with dedicated technical architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'IP Whitelisting', desc: 'Share your source server IP addresses for secure firewall allow-listing and TLS certificate exchange.' },
              { step: '02', title: 'Credential Issuance', desc: 'Receive dedicated system_id, password, host, and port for your Transmitter/Receiver binds.' },
              { step: '03', title: 'Sandbox PDU Testing', desc: 'Perform live submit_sm and deliver_sm loop tests to verify throughput and DLT headers.' },
              { step: '04', title: 'Production Ramp-Up', desc: 'Scale traffic throughput up to 5,000+ TPS per bind with real-time CDR and SLA monitoring.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                Bank-Grade Protocol Security
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Encrypted SMPP & Zero Packet Loss
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Zion SMPP infrastructure runs in ISO 27001 certified Tier-4 data centers with hardware firewall filtering, automated DDoS mitigation, and active-active route redundancy.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-6 h-6 text-zion-orange mx-auto mb-2" />
                <div className="text-xs font-bold">IPSec / TLS VPN</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-bold">ISO 27001 Certified</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-bold">99.999% SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Protocol FAQs
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Ready to Connect via <span className="text-zion-orange">Carrier SMPP v3.4</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Speak with our carrier interconnect architects to provision your sandbox binds and test high-throughput messaging today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Provision SMPP Binds</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 6. Enterprise Communication APIs Dedicated View ── */
function EnterpriseApisPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('rest');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const apiTypes = [
    {
      id: 'rest',
      title: 'Unified Omni-Channel REST API',
      tag: 'One Single API for All Channels',
      badge: 'Single Endpoint',
      desc: 'Send SMS, WhatsApp, RCS, and Voice alerts through one unified JSON RESTful endpoint with automatic multi-channel fallback logic.',
      features: ['Unified payload format across SMS, RCS, WhatsApp & Voice', 'Sub-50ms API response time with instant message IDs', 'Native SDKs for Node.js, Python, Java, PHP, Go, and cURL', 'Intelligent automatic channel fallback (WhatsApp ➜ RCS ➜ SMS)'],
      stats: '< 50ms API Response'
    },
    {
      id: 'webhooks',
      title: 'Real-Time Webhooks & Events',
      tag: 'Asynchronous Event Streaming',
      badge: 'Zero Polling',
      desc: 'Stream delivery receipts, incoming customer replies, read status events, and button click callbacks directly into your application backend.',
      features: ['HMAC SHA-256 signed payload security validation', 'Automatic exponential backoff retries on endpoint failure', 'Filter events by message type, campaign, or delivery status', 'Real-time webhook log inspector in developer portal'],
      stats: '100% Guaranteed Webhooks'
    },
    {
      id: 'crm-connectors',
      title: 'No-Code CRM & ERP Connectors',
      tag: 'Plug-and-Play Integrations',
      badge: 'No Code Required',
      desc: 'Trigger automated messaging directly from Salesforce, Zoho CRM, HubSpot, LeadSquared, Shopify, and Zapier without writing code.',
      features: ['Pre-built native plugins for Salesforce AppExchange & Zoho', 'Two-way lead conversation synchronization into CRM records', 'Automated workflow triggers on lead stage changes', 'Role-based agent access inside your existing CRM interface'],
      stats: '15 Min Setup Time'
    }
  ];

  const useCases = [
    { icon: Landmark, sector: 'FinTech & Banking', title: 'Transactional OTP & Payment Triggers', desc: 'Integrate automated payment confirmation alerts and 2FA login verification into mobile banking apps.' },
    { icon: ShoppingBag, sector: 'E-Commerce & Retail', title: 'Order Tracking & Delivery Status Updates', desc: 'Trigger automated WhatsApp and SMS shipment notifications whenever warehouse status updates in Shopify/WooCommerce.' },
    { icon: Building2, sector: 'Real Estate CRMs', title: 'Instant Lead Capture & Brochure Dispatch', desc: 'When a new lead fills a Facebook ad, our webhook triggers an instant WhatsApp brochure and logs the lead in Salesforce.' },
    { icon: Stethoscope, sector: 'Healthcare Systems', title: 'Appointment Reminders & Lab Reports', desc: 'Connect hospital management software to automatically dispatch lab PDF reports and doctor appointment reminders.' },
    { icon: GraduationCap, sector: 'EdTech & Learning', title: 'Course Enrollment & Live Class Alerts', desc: 'Send student onboarding credentials and automated Zoom/Meet link reminders 15 minutes before live sessions.' },
    { icon: Car, sector: 'Automobile Dealerships', title: 'Test Drive Bookings & Service Reminders', desc: 'Sync customer website test drive requests directly to local dealership ERPs and dispatch instant confirmation SMS.' },
    { icon: Plane, sector: 'Travel & Airlines', title: 'Boarding Gate & Itinerary Changes', desc: 'Broadcast real-time flight departure updates and digital boarding passes via high-priority REST API calls.' },
    { icon: Bot, sector: 'SaaS Platforms', title: 'Embedded Customer Communication', desc: 'Integrate white-labeled multi-channel messaging directly into your B2B SaaS software products.' }
  ];

  const faqs = [
    { q: 'What SDKs and programming languages are supported?', a: 'Zion provides official native SDK libraries and comprehensive code samples for Node.js/TypeScript, Python, Java, PHP, Go, C# .NET, Ruby, and standard cURL JSON endpoints.' },
    { q: 'How does the automated multi-channel fallback feature work?', a: 'You can configure an intelligent fallback cascade. For example, our API will first attempt to deliver via WhatsApp. If the message is not read or delivered within 60 seconds, it automatically re-routes via RCS or SMS.' },
    { q: 'Are API requests authenticated and secure?', a: 'Yes. All API requests require Bearer token authentication over HTTPS (TLS 1.3). Webhook event payloads are cryptographically signed using HMAC SHA-256 signatures for zero-trust security.' },
    { q: 'What is the rate limit and API throughput capacity?', a: 'Standard developer accounts support up to 500 requests per second. Enterprise accounts can scale up to 10,000+ RPS with dedicated load-balanced infrastructure.' },
    { q: 'Can we test the API in a sandbox environment before going live?', a: 'Yes! You can instantly generate sandbox API keys with free test credits in the Zion Developer Portal to test all endpoints and webhook simulators.' }
  ];

  const currentTab = apiTypes.find(t => t.id === activeTab) || apiTypes[0];

  return (
    <div className="bg-white text-zion-deep-blue min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#071B3A] via-[#0A254A] to-[#102F68] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-zion-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-zion-orange animate-pulse"></span>
                DEVELOPER-FIRST UNIFIED COMMUNICATION APIS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#FFA05C]">
                  Communication APIs
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Integrate SMS, WhatsApp, RCS, and Voice into your software with a single RESTful API. Plug into Salesforce, Zoho, HubSpot, and custom ERPs in minutes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
                >
                  <span>Get API Sandbox Keys</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#code-sample"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all duration-200"
                >
                  <span>View API Docs</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-white">&lt; 50ms</div>
                  <div className="text-xs text-blue-200/80 font-medium">API Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zion-orange">10,000+</div>
                  <div className="text-xs text-blue-200/80 font-medium">RPS Throughput</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">99.99%</div>
                  <div className="text-xs text-blue-200/80 font-medium">API Uptime SLA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="bg-[#051329] border border-[#102F68] rounded-3xl p-6 sm:p-7 shadow-2xl max-w-md w-full font-mono text-xs text-blue-100 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-[11px] text-slate-300 ml-2">POST /v1/messages/dispatch</span>
                  </div>
                  <span className="text-zion-orange font-bold">200 OK</span>
                </div>

                <pre className="text-blue-200 text-[11px] leading-relaxed overflow-x-auto">
{`{
  "channels": ["whatsapp", "rcs", "sms"],
  "to": "+919876543210",
  "template": "booking_confirmed",
  "fallback": {
    "enabled": true,
    "timeout_sec": 60
  }
}`}
                </pre>

                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center justify-between">
                  <span>⚡ Message Delivered (WhatsApp)</span>
                  <span className="font-bold">Latency: 28ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS SHOWCASE */}
      <section id="demo" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Developer Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              One Unified Platform for All Messaging Needs
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Integrate REST APIs, configure real-time webhooks, or connect CRM systems with zero code.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {apiTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={"px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 " + (activeTab === t.id ? "bg-zion-deep-blue text-white shadow-md" : "bg-white text-zion-dark-gray border border-slate-200")}
              >
                <span>{t.title}</span>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (activeTab === t.id ? "bg-zion-orange text-white font-black" : "bg-slate-100 text-slate-600")}>
                  {t.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-md bg-orange-50 text-zion-orange border border-orange-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentTab.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zion-deep-blue">
                  {currentTab.title}
                </h3>
                <p className="text-zion-dark-gray text-base leading-relaxed">
                  {currentTab.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentTab.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCheck className="w-5 h-5 text-zion-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-[#071B3A] to-[#102F68] rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
                <div className="text-xs uppercase tracking-widest text-zion-orange font-bold">Benchmark Speed</div>
                <div className="text-4xl font-black text-white">{currentTab.stats}</div>
                <div className="h-px bg-white/10 w-3/4 mx-auto my-3"></div>
                <p className="text-xs text-blue-100/70 font-light">
                  Low-latency edge routing with global multi-region deployments.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 btn-orange-primary font-bold rounded-lg text-sm"
                >
                  <span>Integrate This API</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CODE SAMPLE SECTION */}
      <section id="code-sample" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Developer Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Simple, Elegant JSON Payloads
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Send messages across any channel with clean, standardized RESTful requests.
            </p>
          </div>

          <div className="bg-[#071B3A] rounded-3xl p-8 md:p-12 text-white border border-[#102F68] shadow-2xl max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-zion-orange font-bold text-white">POST</span>
                <span className="text-blue-200">https://api.zionmarketing.in/v1/messages/dispatch</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="px-2.5 py-1 rounded bg-white/10">Node.js</span>
                <span className="px-2.5 py-1 rounded bg-white/10">Python</span>
                <span className="px-2.5 py-1 rounded bg-white/10">Java</span>
                <span className="px-2.5 py-1 rounded bg-white/10">cURL</span>
              </div>
            </div>

            <pre className="text-xs sm:text-sm text-blue-100 font-mono leading-relaxed overflow-x-auto">
{`// Dispatch Omni-Channel Message with Automated Fallback
const response = await fetch('https://api.zionmarketing.in/v1/messages/dispatch', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ZION_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    channels: ['whatsapp', 'rcs', 'sms'],
    recipient: '+919876543210',
    sender_id: 'ZIONTX',
    template: {
      name: 'order_status_update',
      variables: { customer_name: 'Rahul Sharma', order_id: 'ORD-9842', tracking_url: 'https://zion.to/track' }
    },
    fallback_policy: { enabled: true, timeout_seconds: 45 }
  })
});

const data = await response.json();
console.log('Message Dispatched:', data.message_id, 'Channel:', data.delivered_channel);`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY USE CASES */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Enterprise Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Powering Modern Software Workflows
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              How leading platforms integrate Zion Communication APIs into their digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-zion-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-zion-orange flex items-center justify-center">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{uc.sector}</span>
                  </div>
                  <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                  <p className="text-xs text-zion-dark-gray leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Integration Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zion-deep-blue mt-3">
              Go From Zero to Production in Hours
            </h2>
            <p className="text-zion-dark-gray text-base mt-3">
              Frictionless developer onboarding with instant sandbox keys and interactive docs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Get API Keys', desc: 'Create your developer account and generate production & sandbox Bearer API tokens instantly.' },
              { step: '02', title: 'Pick SDK or REST', desc: 'Install our lightweight native SDKs (Node, Python, Java) or use standard cURL REST endpoints.' },
              { step: '03', title: 'Listen to Webhooks', desc: 'Configure your HTTP callback URL to receive real-time delivery receipts and customer replies.' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Go live and track request metrics, payload inspection, and latency telemetry on the dashboard.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="text-3xl font-black text-zion-orange/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-xs text-zion-dark-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="py-16 bg-[#071B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                Enterprise Security & SLA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Encrypted & High Availability Guaranteed
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Zion APIs operate with strict TLS 1.3 encryption, HMAC SHA-256 webhook signatures, ISO 27001 data center compliance, and 99.99% uptime SLA.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-6 h-6 text-zion-orange mx-auto mb-2" />
                <div className="text-xs font-bold">HMAC Webhooks</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-bold">ISO 27001 Certified</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-bold">99.99% SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Developer Support
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3A] via-[#0A254A] to-[#102F68] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Build with <span className="text-zion-orange">Enterprise Communication APIs</span>
          </h2>
          <p className="text-blue-100/90 text-base max-w-xl mx-auto font-normal">
            Get instant sandbox credentials, explore interactive code samples, and start dispatching messages within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
            >
              <span>Get Free API Keys</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ── 7. Custom Real Estate Project Branding & Site Launch View ── */
function RealEstateBrandingView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatWeDoCards = [
    {
      icon: Compass,
      title: '1. Project Naming & Identity',
      items: ['Project Naming & Positioning', 'Logo Design & Symbolism', 'Visual Brand Identity', 'Color Palette & Aesthetic', 'Typography Hierarchy', 'Brand Guidelines Book']
    },
    {
      icon: Eye,
      title: '2. Sales Office Design',
      items: ['Sales Office Architecture Concept', 'Interior Experience Branding', 'Reception & Welcome Branding', 'Immersive Experience Zones', 'Sample Flat Storytelling', 'Customer Journey Touchpoints']
    },
    {
      icon: Building,
      title: '3. Site & Hoarding Branding',
      items: ['High-Impact Project Hoardings', 'Grand Entrance Arch Branding', 'Directional & Road Signage', 'Construction Site Graphics', 'Tower & Block Identification', 'Perimeter Outdoor Branding']
    },
    {
      icon: Megaphone,
      title: '4. Launch Campaign Creatives',
      items: ['Launch Campaign Concept & Theme', 'Master Key Visual (KV)', 'Print Ads & Newspaper Jackets', 'Digital Campaign Creative Suites', 'Social Media Teaser & Reveal Kits', 'Performance Ad Creatives']
    },
    {
      icon: FileText,
      title: '5. Sales Collateral',
      items: ['Luxury Project Brochures', 'Investor & Buyer Presentations', 'Floor Plan & Unit Folios', 'Tariff & Cost Calculation Sheets', 'Exhibition Standees & Rollups', 'Channel Partner (CP) Launch Kits']
    },
    {
      icon: Layout,
      title: '6. Digital Project Presence',
      items: ['High-Converting Project Microsite', 'Interactive Project Landing Pages', 'Lead Qualification Capture Forms', 'RCS Rich Media Campaigns', 'WhatsApp Interactive Bot Catalog', 'Omnichannel Launch Outreach']
    }
  ];

  const salesOfficeElements = [
    { icon: Building, title: 'Reception Branding', desc: 'Grand entrance statement that sets an immediate impression of luxury and trust.' },
    { icon: Layout, title: 'Project Display Walls', desc: 'High-impact focal walls highlighting architectural elevations and master layouts.' },
    { icon: Sparkles, title: 'Experience Zones', desc: 'Interactive touchpoints guiding prospective buyers through the project story.' },
    { icon: MapPin, title: 'Location & Connectivity', desc: 'Detailed strategic transit, highway, school, and lifestyle connectivity panels.' },
    { icon: Award, title: 'Amenities Display', desc: 'Visual showcases of clubhouses, swimming pools, podium gardens, and lifestyle features.' },
    { icon: Compass, title: 'Floor Plan Displays', desc: 'Crystal-clear 2BHK, 3BHK, and penthouse layout boards for effortless unit selection.' },
    { icon: Home, title: 'Sample Flat Communication', desc: 'Elegant specification plaques and walk-through communication inside show residences.' },
    { icon: Flame, title: 'Pricing & Offer Displays', desc: 'Transparent, visually compelling launch pricing tables and flexible payment plans.' },
    { icon: Layers, title: 'Directional Signage', desc: 'Cohesive, branded navigational signage from parking to VIP closing lounges.' }
  ];

  const launchJourneySteps = [
    { number: '01', title: 'PROJECT DISCOVERY', desc: 'Deep dive to understand the project DNA, micro-market location, buyer persona, pricing positioning, and developer vision.' },
    { number: '02', title: 'BRAND IDENTITY', desc: 'Crafting the iconic project name, logo mark, color psychology, tone of voice, typography, and complete master visual identity.' },
    { number: '03', title: 'SALES OFFICE EXPERIENCE', desc: '3D spatial design for the sales gallery, customer journey zones, interactive display walls, and closing lounge branding.' },
    { number: '04', title: 'SITE BRANDING', desc: 'Designing and deploying site boundary hoardings, grand entrance gateways, approach road signage, and on-site landmarks.' },
    { number: '05', title: 'LAUNCH COLLATERALS', desc: 'Developing luxury coffee-table brochures, digital flipbooks, unit floor plan folios, standees, flyers, and channel partner kits.' },
    { number: '06', title: 'DIGITAL LAUNCH', desc: 'Deploying high-speed project landing pages, targeted RCS carousels, WhatsApp catalogs, SMS blasts, and digital ad campaigns.' }
  ];

  const realEstateUseCases = [
    { title: 'Residential Launches', desc: 'Townships, high-rise towers, and master-planned communities looking for massive pre-launch hype.' },
    { title: 'Redevelopment Projects', desc: 'Prime urban redevelopment projects needing modern, trustworthy brand repositioning.' },
    { title: 'Luxury & Ultra-Luxury', desc: 'Bespoke residences, penthouses, and signature villas demanding an ultra-premium aesthetic.' },
    { title: 'Premium Apartments', desc: 'High-velocity 2BHK & 3BHK aspirational developments targeting modern urban homebuyers.' },
    { title: 'Integrated Townships', desc: 'Mega projects with residential, retail, school, and leisure ecosystems under one grand umbrella.' },
    { title: 'Commercial Projects', desc: 'Grade-A IT parks, boutique retail plazas, and corporate office parks attracting high-value investors.' },
    { title: 'New Project Pre-Launches', desc: 'High-octane teaser campaigns to build massive buyer waitlists and channel partner momentum.' },
    { title: 'Sustenance Campaigns', desc: 'Mid-lifecycle brand revamps, new tower release campaigns, and inventory liquidation drives.' }
  ];

  const keyBenefits = [
    'Consistent Project Identity',
    'Premium Customer Experience',
    'Faster Launch Execution',
    'Complete Sales Office Branding',
    'Integrated Online + Offline Branding',
    'Better Sales Presentation',
    'Stronger Project Recall',
    'Launch-Ready Marketing Assets'
  ];

  const faqs = [
    { q: 'What is included in the Real Estate Project Branding & Launch package?', a: 'We provide an end-to-end turnkey solution: project naming, visual identity (logo, color palette, brand guidelines), 3D sales office environmental design, site hoardings, print & digital sales collaterals (brochures, floor plans), and digital launch campaigns across RCS, WhatsApp, and Meta Ads.' },
    { q: 'How long does a complete project branding and sales office design take?', a: 'Standard brand identity, naming, and key visuals take 10-14 days. Complete sales office spatial 3D concept designs and launch collateral production are typically completed within 3 to 4 weeks.' },
    { q: 'Do you handle the actual on-site printing and fabrication of hoardings and signage?', a: 'Yes. Zion provides complete print-ready master production files, material specifications (ACP, acrylic, backlit vinyl), and coordinates with your site fabrication teams for precision on-site execution.' },
    { q: 'Can Zion also manage the digital lead generation campaigns for the launch?', a: 'Yes. Zion specializes in integrated real estate communication, combining on-site branding with high-converting Click-to-WhatsApp ads, RCS carousels, and targeted SMS campaigns to drive maximum footfall to your newly branded sales gallery.' }
  ];

  return (
    <div className="bg-white min-h-screen text-zion-dark pt-28 pb-20 overflow-hidden">
      {/* Subtle Top Ambient Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-[#EEF4FF]/70 via-white to-white pointer-events-none" />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-12 pb-16 reveal max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#EEF4FF] border-2 border-[#D6E4FF] shadow-md mb-6">
          <Building2 className="w-10 h-10 text-zion-blue" />
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
          <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">REAL ESTATE PROJECT LAUNCH BRANDING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zion-deep-blue mb-6 tracking-tight leading-[1.12]">
          Build a Project Brand <br className="hidden sm:inline" />
          <span className="text-zion-orange">That Buyers Remember.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zion-dark-gray mb-10 leading-relaxed font-normal">
          From project naming and visual identity to sales office design, site branding and launch creatives, Zion Marketing creates a complete brand experience for real estate projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-orange-500/20"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#what-we-do"
            className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold"
          >
            View Our Capabilities
          </a>
        </div>
      </section>

      {/* ── 2. WHAT WE DO SECTION ── */}
      <section id="what-we-do" className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Full-Spectrum Real Estate Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
            Complete Project Branding <br className="hidden sm:inline" />
            <span className="text-zion-orange">Under One Roof</span>
          </h2>
          <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
            We bridge the gap between creative storytelling, environmental sales design, and aggressive market-launch execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {whatWeDoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] w-fit mb-5 text-zion-blue">
                    <Icon className="w-7 h-7 text-zion-blue" />
                  </div>
                  <h3 className="text-xl font-extrabold text-zion-deep-blue mb-4">{card.title}</h3>
                  <div className="space-y-2.5 mb-6">
                    {card.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2.5 text-xs font-medium text-zion-dark-gray">
                        <div className="w-4 h-4 rounded-full bg-[#FFF4ED] flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-zion-orange" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. SALES OFFICE EXPERIENCE SECTION ── */}
      <section className="py-24 bg-[#102F68] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Spatial & Environmental Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Turn Your Sales Office <br className="hidden sm:inline" />
              <span className="text-zion-orange">Into a Sales Experience.</span>
            </h2>
            <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
              Every customer touchpoint matters. We design and brand your sales environment to create a premium, consistent and memorable project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesOfficeElements.map((elem, idx) => {
              const Icon = elem.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-white/90 shadow-lg text-zion-dark card-lift"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-zion-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{elem.title}</h3>
                  <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed">{elem.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT LAUNCH SECTION (Timeline Journey) ── */}
      <section className="py-24 bg-[#F7F9FC] border-y border-[#E2E8F0] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-white mb-4 shadow-sm">
              <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">End-to-End Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
              From First Sketch to <span className="text-zion-orange">Project Launch.</span>
            </h2>
            <p className="text-base sm:text-lg text-zion-dark-gray font-normal">
              A streamlined, battle-tested launch journey that builds massive market anticipation and drives immediate site visits.
            </p>
          </div>

          {/* Quick Flow Banner */}
          <div className="bg-white p-5 rounded-2xl border border-[#D6E4FF] shadow-sm mb-16 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[750px] text-xs font-bold text-zion-blue gap-2 text-center">
              <span className="px-3 py-1.5 bg-[#EEF4FF] rounded-lg">1. Project Concept</span>
              <span>&rarr;</span>
              <span className="px-3 py-1.5 bg-[#EEF4FF] rounded-lg">2. Brand Identity</span>
              <span>&rarr;</span>
              <span className="px-3 py-1.5 bg-[#EEF4FF] rounded-lg">3. Sales Office</span>
              <span>&rarr;</span>
              <span className="px-3 py-1.5 bg-[#EEF4FF] rounded-lg">4. Site Branding</span>
              <span>&rarr;</span>
              <span className="px-3 py-1.5 bg-[#EEF4FF] rounded-lg">5. Marketing Collateral</span>
              <span>&rarr;</span>
              <span className="px-3 py-1.5 bg-[#FFF4ED] text-zion-orange rounded-lg">6. Digital Launch & Leads</span>
            </div>
          </div>

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {launchJourneySteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all card-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-zion-orange text-white font-black text-lg flex items-center justify-center mb-5 shadow-md shadow-orange-500/25">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-zion-deep-blue mb-2.5">{step.title}</h3>
                  <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. REAL ESTATE USE CASES ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-4">
              <Building className="w-3.5 h-3.5 text-zion-orange" />
              <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Industry Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
              Built For <span className="text-zion-orange">Real Estate Developers</span>
            </h2>
            <p className="text-base sm:text-lg text-zion-dark-gray font-normal">
              Whether launching a flagship high-rise, mixed-use township or boutique redevelopment project, our branding scales to your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realEstateUseCases.map((uc, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all card-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center mb-4 text-zion-blue">
                  <Building2 className="w-5 h-5 text-zion-blue" />
                </div>
                <h3 className="text-base font-bold text-zion-deep-blue mb-2">{uc.title}</h3>
                <p className="text-zion-dark-gray text-xs leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. KEY BENEFITS ── */}
      <section className="py-20 bg-[#EEF4FF] border-y border-[#D6E4FF] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue mb-4">
              One Brand. One Experience. <br className="hidden sm:inline" />
              <span className="text-zion-orange">Every Touchpoint.</span>
            </h2>
            <p className="text-zion-dark-gray text-base">
              Eliminate agency fragmentation. Get a synchronized project identity across on-site architecture and multi-channel marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#D6E4FF] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-zion-orange flex-shrink-0" />
                <span className="text-zion-deep-blue font-bold text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ── */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-zion-orange font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-black text-zion-deep-blue mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={"w-5 h-5 shrink-0 transition-transform duration-200 " + (activeFaq === idx ? "rotate-180 text-zion-orange" : "text-slate-400")} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zion-dark-gray leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA SECTION ── */}
      <section className="py-24 reveal max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#102F68] to-[#071B3A] text-white shadow-2xl shadow-blue-950/25">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-zion-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">Let's Build Your Project Brand</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Launching a New <span className="text-zion-orange">Real Estate Project?</span>
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Let Zion Marketing build your project's identity, sales office and complete launch experience.
          </p>
          <Link
            to="/contact"
            className="btn-orange-primary inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full font-bold text-base shadow-xl shadow-orange-950/30"
          >
            <span>Plan Your Project Launch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}


/* ── Dedicated Comprehensive Bulk SMS Page View ── */
function BulkSMSPageView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const smsTypes = [
    {
      title: 'Promotional SMS',
      desc: 'Reach customers with offers, campaigns, launches and promotional communication.',
      badge: 'High-Volume Reach',
      features: ['High-volume campaigns', 'Customer engagement', 'Scheduled messaging', 'Campaign tracking'],
      link: '/contact',
      cta: 'Explore Promotional SMS →'
    },
    {
      title: 'Transactional SMS',
      desc: 'Deliver critical customer updates instantly and reliably.',
      badge: '24/7 Priority SLA',
      features: ['Order updates', 'Payment alerts', 'Account notifications', 'Service updates'],
      link: '/contact',
      cta: 'Explore Transactional SMS →'
    },
    {
      title: 'OTP SMS',
      desc: 'Fast and secure authentication for your digital products.',
      badge: 'Sub-Second Latency',
      features: ['Instant OTP delivery', 'Authentication workflows', 'API integration', 'Real-time delivery status'],
      link: '/contact',
      cta: 'Explore OTP SMS →'
    }
  ];

  const useCases = [
    {
      icon: Landmark,
      title: 'Banking & Fintech',
      desc: 'OTP, transaction alerts and account notifications.'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      desc: 'Order confirmations, shipping updates and offers.'
    },
    {
      icon: Building2,
      title: 'Real Estate',
      desc: 'Lead follow-ups, site visit reminders and project launches.'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      desc: 'Appointments, reminders and patient notifications.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      desc: 'Admissions, fee alerts and important updates.'
    },
    {
      icon: Truck,
      title: 'Logistics',
      desc: 'Shipment updates and delivery notifications.'
    },
    {
      icon: Globe,
      title: 'Apps & SaaS',
      desc: 'Authentication, alerts and product notifications.'
    },
    {
      icon: Shield,
      title: 'Enterprise',
      desc: 'High-volume customer communication at scale.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Choose Route & Volume',
      description: 'Select promotional, transactional or OTP SMS.'
    },
    {
      step: '02',
      title: 'Connect API or Dashboard',
      description: 'Integrate ZION with your application or use the dashboard.'
    },
    {
      step: '03',
      title: 'Draft & Approve Templates',
      description: 'Configure DLT-approved messaging templates.'
    },
    {
      step: '04',
      title: 'Launch & Track',
      description: 'Send campaigns and monitor delivery telemetry.'
    }
  ];

  const complianceItems = [
    {
      icon: Scale,
      title: 'DLT & TRAI Compliance',
      desc: '100% compliant with TRAI enterprise regulations, entity registrations, and scrubbing algorithms.'
    },
    {
      icon: UserCheck,
      title: 'Sender ID Management',
      desc: 'Provision and bind approved 6-character alphabetic header IDs across all major Indian telcos.'
    },
    {
      icon: FileCheck2,
      title: 'Template Management',
      desc: 'Pre-approved HSM template libraries with rapid validation for transactional and service alerts.'
    },
    {
      icon: ShieldCheck,
      title: 'Consent Management',
      desc: 'Automated DND scrubbing and customer opt-in preference management to prevent regulatory violations.'
    },
    {
      icon: Lock,
      title: 'Secure Infrastructure',
      desc: 'TLS 1.3 encrypted data in transit, IP whitelisting, and carrier-grade Tier-1 datacenter redundancy.'
    },
    {
      icon: Activity,
      title: 'Real-time Delivery Reporting',
      desc: 'Millisecond-timestamped DLR callbacks via webhooks with detailed error codes and status telemetry.'
    }
  ];

  const faqs = [
    {
      q: 'What is Bulk SMS?',
      a: 'Bulk SMS is the dissemination of large numbers of SMS messages for delivery to mobile phone terminals. It is used by media companies, enterprises, banks, and consumer brands for marketing campaigns, one-time passwords (OTPs), fraud alerts, and customer notifications.'
    },
    {
      q: 'What is the difference between Promotional and Transactional SMS?',
      a: 'Promotional SMS is used for marketing, discounts, and brand awareness, delivered strictly between 10:00 AM to 9:00 PM to non-DND numbers. Transactional SMS is used for critical alerts like OTPs, order updates, and bank transactions, delivered 24/7 without DND restrictions.'
    },
    {
      q: 'Is DLT registration required?',
      a: 'Yes, as per TRAI guidelines in India, every business sending commercial SMS must register their entity, sender IDs (headers), and message templates on a telecom DLT (Distributed Ledger Technology) portal before sending messages.'
    },
    {
      q: 'How fast are SMS delivered?',
      a: 'ZION uses direct Tier-1 carrier routes with high TPS capacity. High-priority OTP messages are delivered with sub-second latency (typically under 2 seconds), while bulk promotional broadcasts are dispatched across multi-threaded carrier queues.'
    },
    {
      q: 'Can I track SMS delivery?',
      a: 'Yes. ZION provides live millisecond DLR (Delivery Receipt) telemetry. You can view delivery statuses (Delivered, Undelivered, Failed with reason codes) in real time on the web dashboard or receive asynchronous webhook callbacks.'
    },
    {
      q: 'Does ZION provide SMS APIs?',
      a: 'Yes. ZION offers developer-friendly RESTful APIs, SMPP v3.4 sockets, and pre-built SDKs for Node.js, Python, PHP, Java, and cURL with full documentation and sandbox environments.'
    },
    {
      q: 'Can ZION handle high-volume SMS?',
      a: 'Absolutely. ZION is engineered for high-throughput enterprise scale, handling millions of messages daily with auto-scaling queues and direct carrier telco connections.'
    },
    {
      q: 'Can I integrate ZION with my CRM or ERP?',
      a: 'Yes. ZION provides pre-built connectors and webhooks to integrate directly with Salesforce, Zoho CRM, HubSpot, LeadSquared, SAP, Shopify, and custom enterprise software.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-zion-dark pt-28 pb-20 overflow-hidden">
      {/* Subtle Blue/Orange Background Ambient Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-[#EEF4FF]/70 via-white to-white pointer-events-none" />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-12 pb-16 reveal max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto mb-6">
          <BulkSmsVisual className="w-full h-full" />
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
          <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Instant, High-Throughput Business Messaging</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zion-deep-blue mb-6 tracking-tight">
          Bulk SMS Solutions
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zion-dark-gray mb-10 leading-relaxed font-normal">
          Deliver millions of messages with direct carrier telco routing. From instant OTP authentication to high-volume promotional broadcasts — our enterprise SMS gateway handles massive scale with zero latency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-orange-500/20"
          >
            <span>Talk to Our SMS Experts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#see-in-action"
            className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold"
          >
            See SMS in Action
          </a>
        </div>
      </section>

      {/* ── 2. NEW SECTION — SEE SMS IN ACTION ── */}
      <section id="see-in-action" className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10 border-t border-[#E2E8F0]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Live Preview Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
            See SMS in <span className="text-zion-orange">Action</span>
          </h2>
          <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
            Experience how ZION delivers fast, reliable and high-volume business messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F7F9FC] border-2 border-[#D6E4FF] rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* LEFT: Realistic Smartphone SMS Preview */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="max-w-[290px] sm:max-w-[310px] w-full mx-auto relative group">
              <img 
                src={smsMockup} 
                alt="Realistic SMS Smartphone Preview" 
                className="w-full h-auto object-contain rounded-[32px] drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* RIGHT: SMS Types & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-zion-orange uppercase tracking-wider">
                Enterprise Communication Gateway
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zion-deep-blue mt-1 mb-3">
                One Platform. Every SMS.
              </h3>
              <p className="text-sm text-zion-dark-gray leading-relaxed">
                Connect your business with millions of Indian mobile subscribers across every telecom network with 99.9% uptime SLA and direct telco connectivity.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Promotional SMS', desc: 'Deliver flash sales, seasonal campaigns and product updates to customer lists.' },
                { title: 'Transactional SMS', desc: 'Automate order dispatch, booking receipts, and payment confirmations 24/7.' },
                { title: 'Instant OTP Delivery', desc: 'Sub-second priority route guarantee for critical 2FA authentication codes.' },
                { title: 'DLT & TRAI Compliance', desc: 'Built-in template scrubbing, header IDs, and automated DND filtering.' },
                { title: 'Real-time Delivery Reports', desc: 'Millisecond timestamped delivery telemetry with detailed DLR webhooks.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#FFF4ED] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-zion-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zion-deep-blue">{item.title}</h4>
                    <p className="text-xs text-zion-dark-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold"
              >
                <span>Send a Test SMS →</span>
              </Link>
              <a
                href="#sms-types"
                className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold"
              >
                View SMS Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SMS TYPES SECTION ── */}
      <section id="sms-types" className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Messaging Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
            One Platform. <span className="text-zion-orange">Every SMS.</span>
          </h2>
          <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
            Choose the right messaging channel for every customer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {smsTypes.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFF4ED] text-zion-orange border border-[#FFD9C2]">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-zion-deep-blue mb-3">{card.title}</h3>
                <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed mb-6">{card.desc}</p>
                
                <div className="space-y-2.5 mb-8">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs font-medium text-zion-dark-gray">
                      <div className="w-4 h-4 rounded-full bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-zion-blue" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={card.link}
                className="w-full py-3 rounded-2xl bg-[#EEF4FF] hover:bg-zion-deep-blue text-zion-blue hover:text-white font-bold text-xs text-center border border-[#D6E4FF] transition-all"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. USE CASES SECTION ── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-[#E2E8F0] reveal relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-white text-xs font-bold text-zion-blue uppercase tracking-wider mb-4 shadow-sm">
              Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
              Built for <span className="text-zion-orange">Every Business</span>
            </h2>
            <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              Tailored messaging infrastructure for high-growth sectors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center text-zion-blue mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-zion-deep-blue mb-1.5">{uc.title}</h3>
                  <p className="text-zion-dark-gray text-xs leading-relaxed">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. NEW SECTION — DELIVERY & ANALYTICS ── */}
      <section className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Live Telemetry Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
            Know What Happens <span className="text-zion-orange">After You Hit Send</span>
          </h2>
          <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
            Track every message with real-time delivery intelligence.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-[#071B3A] border-2 border-[#102F68] rounded-3xl p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-white tracking-wide">ZION Enterprise Analytics Console</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Activity className="w-4 h-4 text-zion-orange" />
              <span>Telco Cluster: Active-Active Binds</span>
            </div>
          </div>

          {/* 5 KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-blue-200 uppercase font-sans font-semibold mb-1">Messages Sent</div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">1,250,000</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-emerald-400 uppercase font-sans font-semibold mb-1">Delivered</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">98.7%</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-rose-300 uppercase font-sans font-semibold mb-1">Failed</div>
              <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">1.3%</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-blue-200 uppercase font-sans font-semibold mb-1">Average Delivery</div>
              <div className="text-xl sm:text-2xl font-black text-zion-orange font-mono">&lt; 2 sec</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 md:col-span-1">
              <div className="text-xs text-blue-200 uppercase font-sans font-semibold mb-1">DLR</div>
              <div className="text-xl sm:text-2xl font-black text-blue-200 font-mono">Real-time</div>
            </div>
          </div>

          {/* Delivery Telemetry Graph / Log Display */}
          <div className="p-5 rounded-2xl bg-[#051329] border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-blue-300 text-[11px] pb-2 border-b border-white/5">
              <span>Time-Series Delivery Volume (Last 24 Hours)</span>
              <span className="text-emerald-400 font-bold">● High TPS Queue Optimal</span>
            </div>

            {/* Simulated Clean SVG Bar Graph */}
            <div className="h-28 flex items-end justify-between gap-1 sm:gap-2 pt-4 px-2">
              {[45, 60, 52, 78, 90, 85, 95, 100, 92, 88, 70, 65, 80, 95, 88, 92, 98, 85, 90, 94, 99, 92, 86, 97].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div 
                    className="w-full bg-gradient-to-t from-zion-blue to-zion-orange rounded-t-sm transition-all duration-300 group-hover:brightness-125"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] text-blue-400 pt-1">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59 (Current)</span>
            </div>
          </div>

          {/* Feature Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            {['Real-time DLR', 'Delivery Reports', 'Campaign Analytics', 'Sender ID Tracking', 'Message Logs'].map((chip, cIdx) => (
              <span 
                key={cIdx}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-blue-100 flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-zion-orange" />
                <span>{chip}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS SECTION ── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-[#E2E8F0] reveal relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-white text-xs font-bold text-zion-blue uppercase tracking-wider mb-4 shadow-sm">
              Simple 4-Step Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
              How It <span className="text-zion-orange">Works</span>
            </h2>
            <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              Get started with ZION enterprise SMS gateway in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue transition-all text-center flex flex-col items-center shadow-card hover:shadow-card-hover card-lift"
              >
                <div className="w-12 h-12 rounded-full bg-zion-orange flex items-center justify-center text-white font-black text-lg mb-5 shadow-md shadow-orange-500/25">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{step.title}</h3>
                <p className="text-zion-dark-gray text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. API INTEGRATION SECTION ── */}
      <section className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="p-8 md:p-12 rounded-3xl border border-[#D6E4FF] bg-[#071B3A] text-white overflow-hidden relative shadow-2xl shadow-blue-950/20">
          <div className="flex items-center gap-2 text-xs font-bold text-zion-orange uppercase tracking-wider mb-4">
            <Terminal className="w-4 h-4" />
            <span>Developer Ready API</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Fast RESTful API Integration
          </h2>
          <p className="text-blue-100/80 mb-6 max-w-2xl text-sm sm:text-base leading-relaxed">
            Integrate high-speed SMS dispatch into your CRM, ERP, or web applications with our clean RESTful API endpoints and webhooks.
          </p>

          {/* Integration Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {['REST API', 'Webhooks', 'Node.js', 'Python', 'PHP', 'Java', 'CRM', 'ERP'].map((badge, bIdx) => (
              <span 
                key={bIdx}
                className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-blue-200"
              >
                {badge}
              </span>
            ))}
          </div>
          
          <div className="bg-[#051329] rounded-2xl p-6 border border-[#102F68] overflow-x-auto mb-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] text-xs text-blue-100/60 font-mono">
              <span className="text-zion-orange font-bold">POST /v1/sms/dispatch</span>
              <span>Content-Type: application/json</span>
            </div>
            <pre className="text-xs sm:text-sm text-blue-100 font-mono leading-relaxed">
              <code>
                {`// Enterprise Bulk SMS Dispatch Request\n`}
                {`fetch('https://api.zionmarketing.in/v1/sms/dispatch', {\n`}
                {`  method: 'POST',\n`}
                {`  headers: {\n`}
                {`    'Authorization': 'Bearer YOUR_ZION_API_KEY',\n`}
                {`    'Content-Type': 'application/json'\n`}
                {`  },\n`}
                {`  body: JSON.stringify({\n`}
                {`    sender_id: 'ZIONTX',\n`}
                {`    recipients: ['+919876543210'],\n`}
                {`    template_id: '120716182910291',\n`}
                {`    message: 'Your verification OTP is 482913. Valid for 5 minutes. - ZION',\n`}
                {`    priority: 'HIGH_OTP_SLA'\n`}
                {`  })\n`}
                {`});`}
              </code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/api-integration"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold"
            >
              <span>View API Documentation →</span>
            </Link>
            <Link
              to="/contact"
              className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-bold"
            >
              Talk to an API Expert →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. COMPLIANCE & SECURITY ── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-[#E2E8F0] reveal relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-white text-xs font-bold text-zion-blue uppercase tracking-wider mb-4 shadow-sm">
              Regulatory Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
              Enterprise-Grade. <span className="text-zion-orange">India-Ready.</span>
            </h2>
            <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              Built in strict adherence with TRAI DLT protocols and enterprise telecom data security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#E2E8F0] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center text-zion-blue mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-zion-deep-blue mb-2">{item.title}</h3>
                  <p className="text-zion-dark-gray text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION (ACCORDION) ── */}
      <section className="py-20 reveal max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
            Frequently Asked <span className="text-zion-orange">Questions</span>
          </h2>
          <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
            Everything you need to know about ZION Bulk SMS infrastructure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#D6E4FF] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zion-deep-blue hover:text-zion-orange transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#EEF4FF] flex items-center justify-center flex-shrink-0 text-zion-blue">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zion-dark-gray leading-relaxed border-t border-[#F1F5F9]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="py-20 reveal max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#102F68] to-[#071B3A] text-white shadow-2xl shadow-blue-950/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Scale Your <span className="text-zion-orange">SMS Communication</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Talk to ZION communication experts and build a reliable messaging solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/20"
            >
              <span>Talk to Our SMS Experts →</span>
            </Link>
            <Link
              to="/contact"
              className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Get Enterprise Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEDICATED RCS BUSINESS MESSAGING PAGE VIEW (13 ENTERPRISE SECTIONS)
// ─────────────────────────────────────────────────────────────────────────────
function RcsBusinessMessagingView() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);
  const [activeCarouselCard, setActiveCarouselCard] = React.useState<number>(0);
  const [copiedCode, setCopiedCode] = React.useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`curl -X POST https://api.zionmarketing.com/v2/rcs/messages \\
  -H "Authorization: Bearer ZION_API_KEY_SEC_9981" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "agent_id": "zion_siddha_sky",
    "message_type": "rich_card",
    "content": {
      "title": "Siddha Sky - Luxury 3BHK Residences",
      "description": "Experience skywalk living with 35+ lifestyle amenities.",
      "media_url": "https://cdn.zionmarketing.com/media/siddha-sky.jpg",
      "suggestions": [
        { "action": "open_url", "text": "View Brochure", "url": "https://zion.re/sky-brochure" },
        { "action": "dial_phone", "text": "Book Site Visit", "phone": "+919876500000" }
      ]
    },
    "fallback": {
      "enabled": true,
      "channel": "sms",
      "text": "Siddha Sky: Explore 3BHK luxury residences at EM Bypass. Call 9876500000 or visit zion.re/sky"
    }
  }'`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // 3. RCS Capabilities (9 Cards)
  const capabilities = [
    {
      icon: Image,
      title: 'RICH MEDIA',
      desc: 'High-definition images, 4K videos, GIFs, and rich visual interactive content delivered seamlessly.'
    },
    {
      icon: Layers,
      title: 'CAROUSELS',
      desc: 'Showcase multiple properties, retail products, or travel packages in a single fluid swipeable card stack.'
    },
    {
      icon: MousePointerClick,
      title: 'ACTION BUTTONS',
      desc: 'Drive one-tap actions to dial phone numbers, trigger URLs, open map locations, and schedule visits.'
    },
    {
      icon: ShieldCheck,
      title: 'BRANDED SENDER',
      desc: 'Instantly build customer trust with verified brand logos, official brand colors, and verified checkmarks.'
    },
    {
      icon: Zap,
      title: 'SUGGESTED ACTIONS',
      desc: 'Accelerate conversion paths with pre-configured quick replies and contextual interactive prompts.'
    },
    {
      icon: MessageSquare,
      title: '2-WAY CHAT',
      desc: 'Enable seamless conversational dialogues with human live agents or automated AI conversational bots.'
    },
    {
      icon: RefreshCw,
      title: 'SMART FALLBACK',
      desc: 'Automated sub-second failover to Tier-1 SMS routes if handset does not have active RCS connectivity.'
    },
    {
      icon: CheckCheck,
      title: 'DELIVERY & READ STATUS',
      desc: 'Granular delivery receipts, read timestamps, and handset verification telemetry in real time.'
    },
    {
      icon: BarChart3,
      title: 'CAMPAIGN ANALYTICS',
      desc: 'Actionable performance telemetry tracking click-throughs, carousel dwell time, and conversions.'
    }
  ];

  // 4. RCS Message Types (4 Cards)
  const messageTypes = [
    {
      badge: 'HIGH IMPACT',
      title: 'PROMOTIONAL RCS',
      desc: 'Launch rich-media campaigns that capture attention and drive action.',
      examples: ['Exclusive Offers & Discounts', 'New Project Launches', 'Property Showcases', 'Festive Product Promotions']
    },
    {
      badge: 'EXPERIENCE DRIVEN',
      title: 'TRANSACTIONAL RCS',
      desc: 'Deliver important updates with richer branded experiences.',
      examples: ['Live Order & Delivery Updates', 'Hotel & Flight Booking Confirmations', 'Payment & Invoice Receipts', 'Urgent Service Alerts']
    },
    {
      badge: 'ZERO PHISHING',
      title: 'OTP & AUTHENTICATION',
      desc: 'Combine trusted authentication with a branded customer experience.',
      examples: ['Instant Login OTPs', '2-Factor Verification Codes', 'Transaction PIN Authorizations', 'Branded Security Account Alerts']
    },
    {
      badge: '2-WAY CONVERSATIONS',
      title: 'CUSTOMER ENGAGEMENT',
      desc: 'Continue the conversation with interactive actions and rich content.',
      examples: ['Inbound Sales Enquiries', 'Live Customer Support Desks', 'Site Visit & Appointment Booking', 'Automated Lead Nurturing']
    }
  ];

  // 5. RCS Use Cases (8 Cards)
  const useCases = [
    {
      icon: Building2,
      industry: 'Real Estate',
      desc: 'Show projects, galleries, floor plans, pricing and site-visit CTAs.'
    },
    {
      icon: ShoppingBag,
      industry: 'E-commerce',
      desc: 'Show products, offers, order updates and shopping actions.'
    },
    {
      icon: Landmark,
      industry: 'Banking & Fintech',
      desc: 'Branded alerts, offers, EMI calculators and customer notifications.'
    },
    {
      icon: Plane,
      industry: 'Travel & Hospitality',
      desc: 'Bookings, interactive itineraries, room upgrades and 24/7 concierge support.'
    },
    {
      icon: Car,
      industry: 'Automotive',
      desc: 'Vehicle launches, test drive bookings, service reminders and digital brochures.'
    },
    {
      icon: Stethoscope,
      industry: 'Healthcare',
      desc: 'Doctor appointments, prescription reminders and clinic communication.'
    },
    {
      icon: GraduationCap,
      industry: 'Education',
      desc: 'Campus admissions, course brochures, deadlines and enquiry journeys.'
    },
    {
      icon: Users,
      industry: 'Retail & Consumer Brands',
      desc: 'Rich promotions, seasonal digital catalogues and store visit direction triggers.'
    }
  ];

  // 6. Carousel Demo Data
  const carouselCards = [
    {
      tag: 'PREMIUM RESIDENCES',
      title: 'Siddha Sky - EM Bypass',
      desc: 'Luxurious 3 & 4 BHK skywalk residences with 35,000 sq.ft. sky amenities and infinity pool.',
      price: 'Starting ₹ 1.45 Cr*',
      buttonText: 'View Details',
      bgGradient: 'from-[#071B3A] to-[#102F68]',
      accentColor: '#FF6B00'
    },
    {
      tag: 'WATERFRONT TOWNSHIP',
      title: 'Siddha Waterfront - Lake Living',
      desc: 'Scenic 2 & 3 BHK lakeside apartments with sprawling green clubhouse and jogging boardwalk.',
      price: 'Starting ₹ 48 Lakhs*',
      buttonText: 'Explore Units',
      bgGradient: 'from-[#0A2540] to-[#184E77]',
      accentColor: '#00D4B8'
    },
    {
      tag: 'SIGNATURE VILLAS',
      title: 'Siddha Eden - Luxury Mansions',
      desc: 'Ultra-exclusive private garden villas with bespoke architecture and private sundecks.',
      price: 'Starting ₹ 3.20 Cr*',
      buttonText: 'Enquire Now',
      bgGradient: 'from-[#102F68] to-[#1E3A8A]',
      accentColor: '#FFB703'
    },
    {
      tag: 'COMMERCIAL HUB',
      title: 'Siddha Sky One - Grade A Offices',
      desc: 'Prime business suites and high-street retail zones located at central business nexus.',
      price: 'Starting ₹ 95 Lakhs*',
      buttonText: 'Schedule Visit',
      bgGradient: 'from-[#03071E] to-[#370617]',
      accentColor: '#F72585'
    }
  ];

  // 7. RCS vs SMS Table
  const comparisonData = [
    { feature: 'Plain Text Messaging', sms: true, rcs: true },
    { feature: 'High-Resolution Images & Banners', sms: false, rcs: true },
    { feature: 'Embedded HD Video & Audio', sms: false, rcs: true },
    { feature: 'Interactive Multi-Card Carousels', sms: false, rcs: true },
    { feature: '1-Tap Action & Quick Reply Buttons', sms: false, rcs: true },
    { feature: 'Verified Brand Identity & Checkmark', sms: 'Limited', rcs: true },
    { feature: '2-Way Conversational Dialogue', sms: 'Limited', rcs: true },
    { feature: 'Rich Native App-like Experience', sms: false, rcs: true },
    { feature: 'Automated Smart SMS Fallback', sms: false, rcs: true },
  ];

  // 10. How RCS Works Steps
  const howRcsWorks = [
    {
      step: '01',
      title: 'Choose Your Campaign',
      desc: 'Define campaign objectives — promotional showcase, transactional alert, or 2-way conversational flow.'
    },
    {
      step: '02',
      title: 'Create Rich Content',
      desc: 'Craft vibrant visual cards, carousels, action buttons, and conversational chatbot quick replies.'
    },
    {
      step: '03',
      title: 'Connect API & Approve',
      desc: 'Link your backend via REST API / webhooks and submit rich templates for Google & Carrier approval.'
    },
    {
      step: '04',
      title: 'Launch & Track',
      desc: 'Broadcast high-velocity rich campaigns and monitor read rates, button clicks, and conversions in real time.'
    }
  ];

  // 11. Compliance & Trust
  const trustCards = [
    {
      icon: ShieldCheck,
      title: 'Verified Business Identity',
      desc: 'Google & Carrier verified sender profile displaying your brand logo, corporate name, and security badge.'
    },
    {
      icon: Lock,
      title: 'Secure Messaging',
      desc: 'End-to-end transport encryption protecting enterprise conversations and customer personal data.'
    },
    {
      icon: Sparkles,
      title: 'Rich Brand Experience',
      desc: 'Consistent corporate visual identity with customized primary brand colors and verified presence.'
    },
    {
      icon: Activity,
      title: 'Delivery Tracking',
      desc: 'Carrier-grade delivery telemetry, instant read receipts, and button-tap interaction analytics.'
    },
    {
      icon: RefreshCw,
      title: 'Fallback Support',
      desc: 'Zero message loss with automated intelligent failover to high-throughput Bulk SMS routes.'
    },
    {
      icon: Terminal,
      title: 'Enterprise APIs',
      desc: 'Robust 99.99% uptime cloud RESTful APIs engineered for massive multi-million message TPS scale.'
    }
  ];

  // 12. FAQ List (10 items)
  const faqs = [
    {
      q: '1. What is RCS Business Messaging?',
      a: 'RCS (Rich Communication Services) is the next-generation evolution of SMS built into native smartphone messaging apps (like Google Messages). It empowers businesses to send rich media like high-res images, carousels, video, and clickable action buttons directly to the user’s default messaging inbox with zero app install required.'
    },
    {
      q: '2. How is RCS different from SMS?',
      a: 'While traditional SMS is restricted to 160 characters of plain text, RCS supports 2048+ characters, verified sender logos, high-resolution multimedia, interactive multi-card carousels, quick-reply buttons, 1-tap dial/map/link actions, and verified read receipts.'
    },
    {
      q: '3. Can RCS include images and videos?',
      a: 'Yes! RCS fully supports rich media attachments including high-definition JPG/PNG banners, MP4 video clips, GIFs, PDF documents, and audio snippets directly inside the conversation thread.'
    },
    {
      q: '4. Can I add CTA buttons to my RCS messages?',
      a: 'Absolutely. You can add multiple interactive CTA buttons such as "Call Now" (dials phone number), "Open Website" (launches URL), "View Location" (opens Google Maps), or "Quick Reply" (sends instant structured text response back to your bot/agent).'
    },
    {
      q: '5. Can RCS support multi-card carousels?',
      a: 'Yes, ZION RCS supports horizontal swipeable carousels containing up to 10 distinct rich cards. Each card can have its own image, title, description, and customized action buttons — ideal for real estate projects, e-commerce catalogues, or hotel room showcases.'
    },
    {
      q: '6. Is RCS available on every phone?',
      a: 'RCS is natively supported on virtually all modern Android devices via Google Messages and carrier RCS networks (reaching hundreds of millions of users across India and globally). Support on iOS is rolling out with Apple’s iOS 18.'
    },
    {
      q: '7. What happens when RCS is unavailable on a recipient’s handset?',
      a: 'ZION provides automated Smart SMS Fallback. If a recipient’s device or network does not support RCS at the time of delivery, our platform instantly converts the payload and delivers a high-priority Bulk SMS with a short link, ensuring 100% reach.'
    },
    {
      q: '8. Can RCS integrate with my CRM and tech stack?',
      a: 'Yes. ZION provides comprehensive RESTful APIs, webhooks, and pre-built SDKs for Node.js, Python, PHP, Java, and major CRMs (Salesforce, HubSpot, Zoho, LeadSquared) for automated broadcast triggers and 2-way chatbot workflows.'
    },
    {
      q: '9. Can I track clicks, read status, and user engagement?',
      a: 'Yes. The ZION RCS analytics console delivers real-time telemetry on message sent status, delivery timestamps, read receipts, button clicks, carousel card swipe dwell times, and campaign conversion rates.'
    },
    {
      q: '10. How can I start an RCS campaign with ZION Marketing?',
      a: 'Getting started is easy: our dedicated team assists you with brand profile registration, Google/carrier verification, rich template design, API onboarding, and campaign launch in just a few days.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-zion-dark overflow-hidden">
      {/* Subtle Top Ambient Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#EEF4FF]/80 via-white to-white pointer-events-none" />

      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-5 shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
              <span className="text-xs font-extrabold text-zion-blue uppercase tracking-wider">
                RICH • INTERACTIVE • CONVERSION-READY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-zion-deep-blue mb-5 tracking-tight leading-[1.12]">
              RCS Business <br />
              <span className="text-zion-orange">Messaging</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zion-dark-gray mb-8 leading-relaxed font-normal max-w-2xl">
              Turn ordinary messages into rich, interactive customer experiences with branded cards, images, carousels and action buttons.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                to="/contact"
                className="btn-orange-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-orange-500/20"
              >
                <span>Talk to Our RCS Experts →</span>
              </Link>
              <a
                href="#capabilities"
                className="btn-secondary-white inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold text-center"
              >
                View RCS Capabilities
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D6E4FF]/60 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-zion-deep-blue">3.5x</div>
                <div className="text-xs text-zion-dark-gray font-medium mt-0.5">Higher Engagement</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-zion-orange">100%</div>
                <div className="text-xs text-zion-dark-gray font-medium mt-0.5">Verified Brand Sender</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-zion-blue">0</div>
                <div className="text-xs text-zion-dark-gray font-medium mt-0.5">App Install Needed</div>
              </div>
            </div>
          </div>

          {/* Right: RCS Smartphone Visual (Directly rendered asset without duplicate frame) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] flex items-center justify-center">
              <img
                src={rcsMockup}
                alt="RCS Business Messaging - Siddha Sky"
                className="w-auto max-w-full h-auto max-h-[440px] sm:max-h-[480px] object-contain block drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SEE RCS IN ACTION (2-COLUMN SHOWCASE) ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Real-World Interaction
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
              See RCS in <span className="text-zion-orange">Action</span>
            </h2>
            <p className="text-zion-dark-gray text-base sm:text-lg mt-3 font-normal">
              Transform a simple message into an interactive customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: RCS Smartphone Visual */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[360px] flex items-center justify-center">
                <img
                  src={rcsMockup}
                  alt="Siddha Sky RCS Business Messaging in action"
                  className="w-auto max-w-full h-auto max-h-[480px] object-contain block drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Feature Checklist & Value Props */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF4ED] border border-orange-200 text-xs font-bold text-zion-orange uppercase tracking-wider">
                Superior Engagement
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue tracking-tight leading-snug">
                More Than a Message.
              </h3>

              <p className="text-zion-dark-gray text-base leading-relaxed font-normal">
                Traditional SMS gets read in plain text. ZION RCS creates an immersive branded showroom directly on the recipient’s phone screen with interactive buttons, high-impact visuals, and 2-way conversation capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Rich Media Cards', desc: 'Crisp images, banners & video assets' },
                  { title: 'Interactive CTA Buttons', desc: '1-tap calls, URLs & directions' },
                  { title: 'Branded Sender Identity', desc: 'Official logo & verified green tick' },
                  { title: 'Carousels & Product Cards', desc: 'Multi-item horizontal card browsing' },
                  { title: '2-Way Conversations', desc: 'Live agent or intelligent bot replies' },
                  { title: 'Smart SMS Fallback', desc: 'Zero delivery failure guarantee' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#D6E4FF] shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-[#FFF4ED] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-zion-orange" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-zion-deep-blue">{item.title}</div>
                      <div className="text-xs text-zion-dark-gray mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-orange-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-orange-500/20"
                >
                  <span>Create Your RCS Campaign →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RCS CAPABILITIES (9 CARDS GRID) ── */}
      <section id="capabilities" className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Full-Spectrum Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
            Powerful Features. <br className="hidden sm:inline" />
            <span className="text-zion-orange">Richer Conversations.</span>
          </h2>
          <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
            Everything your brand needs to deploy next-generation interactive customer communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] w-fit mb-5 text-zion-blue">
                    <Icon className="w-7 h-7 text-zion-blue" />
                  </div>
                  <h3 className="text-lg font-extrabold text-zion-deep-blue tracking-wider uppercase mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zion-dark-gray leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. RCS MESSAGE TYPES (4 CARDS) ── */}
      <section className="py-20 bg-[#EEF4FF]/50 border-y border-[#D6E4FF] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-white text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Comprehensive Messaging Modes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
              One Channel. <span className="text-zion-orange">Multiple Customer Journeys.</span>
            </h2>
            <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
              Tailor each message type to match your specific conversion and engagement goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {messageTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#FFF4ED] text-zion-orange border border-orange-200 uppercase tracking-wider">
                      {type.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-zion-deep-blue mb-3">
                    {type.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zion-dark-gray leading-relaxed mb-6 font-normal">
                    {type.desc}
                  </p>

                  <div className="pt-4 border-t border-[#F1F5F9] space-y-2.5">
                    <div className="text-xs font-bold text-zion-blue uppercase tracking-wider mb-2">Example Use Cases:</div>
                    {type.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-zion-orange" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F1F5F9]">
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-zion-blue hover:text-zion-orange inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Deploy {type.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RCS USE CASES (8 INDUSTRY CARDS) ── */}
      <section className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
            Built for Experiences <span className="text-zion-orange">That Convert</span>
          </h2>
          <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
            Discover how leading industry sectors unlock 3x engagement rates using ZION RCS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#D6E4FF] hover:border-zion-blue shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 p-3 rounded-xl bg-[#EEF4FF] border border-[#D6E4FF] w-fit mb-4 text-zion-blue">
                    <Icon className="w-6 h-6 text-zion-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-zion-deep-blue mb-2">{uc.industry}</h3>
                  <p className="text-xs sm:text-sm text-zion-dark-gray leading-relaxed font-normal">{uc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 6. RCS CAROUSEL DEMO (HIGH-IMPACT VISUAL SECTION) ── */}
      <section className="py-20 bg-[#071B3A] text-white relative z-10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-blue/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                Interactive Message Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Show More. <span className="text-zion-orange">Sell More.</span>
              </h2>
              <p className="text-slate-300 text-base mt-2 max-w-xl font-normal">
                Give your customers a full catalog experience inside their native SMS app with swipeable multi-card carousels.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveCarouselCard(prev => (prev === 0 ? carouselCards.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
                aria-label="Previous card"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveCarouselCard(prev => (prev === carouselCards.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-zion-orange hover:bg-orange-600 flex items-center justify-center text-white font-bold transition-all shadow-lg shadow-orange-500/20"
                aria-label="Next card"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Realistic Horizontal RCS Carousel Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselCards.map((card, idx) => {
              const isSelected = activeCarouselCard === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCarouselCard(idx)}
                  className={`cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'border-zion-orange ring-2 ring-zion-orange/40 bg-white/10 scale-[1.02] shadow-2xl'
                      : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {/* Card Visual Header */}
                  <div className={`p-6 bg-gradient-to-br ${card.bgGradient} relative min-h-[160px] flex flex-col justify-between`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-black/40 text-white border border-white/20 tracking-wider">
                        {card.tag}
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-300">RCS Card #{idx + 1}</div>
                      <div className="text-lg font-bold text-white leading-snug mt-0.5">{card.title}</div>
                    </div>
                  </div>

                  {/* Card Body & CTA */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{card.desc}</p>
                    <div>
                      <div className="text-sm font-extrabold text-orange-400 mb-4">{card.price}</div>
                      <button
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all bg-white text-zion-deep-blue hover:bg-zion-orange hover:text-white"
                      >
                        <span>{card.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-slate-400 font-medium">
              * RCS carousels support up to 10 rich cards with customized URL, Dial, Map, and Bot actions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. RCS vs SMS (COMPARISON TABLE) ── */}
      <section className="py-20 max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue leading-tight">
            SMS Gets Delivered. <br />
            <span className="text-zion-orange">RCS Gets Experienced.</span>
          </h2>
          <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
            See how upgrading from standard SMS to ZION RCS transforms your customer engagement.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#D6E4FF] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D6E4FF] bg-[#F8FAFC]">
                  <th className="p-5 sm:p-6 text-sm font-extrabold text-zion-deep-blue">Feature Capability</th>
                  <th className="p-5 sm:p-6 text-sm font-extrabold text-zion-dark-gray text-center w-36 sm:w-48 bg-slate-100/70">
                    Traditional SMS
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-extrabold text-zion-blue text-center w-36 sm:w-48 bg-[#EEF4FF]">
                    ZION RCS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-zion-deep-blue text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-slate-50/50">
                      {row.sms === true ? (
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : row.sms === false ? (
                        <span className="text-slate-400 font-bold text-lg">—</span>
                      ) : (
                        <span className="text-xs font-bold text-slate-500">{row.sms}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-[#EEF4FF]/40">
                      {row.rcs === true ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                      ) : (
                        <span className="text-xs font-bold text-zion-blue">{row.rcs}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 8. RCS ANALYTICS (REALISTIC ZION DASHBOARD) ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Real-Time Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
              Measure <span className="text-zion-orange">Every Interaction</span>
            </h2>
            <p className="text-zion-dark-gray text-base sm:text-lg mt-3 font-normal">
              Track delivery telemetry, read confirmations, button clicks, and funnel conversions in one unified dashboard.
            </p>
          </div>

          {/* 5 Real Metrics KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Messages Sent', val: '500,000', change: '+18.4% vs last mo', color: 'text-zion-deep-blue' },
              { label: 'Delivered', val: '98.9%', change: 'Direct carrier SLA', color: 'text-emerald-600' },
              { label: 'Opened', val: '91.4%', change: 'Rich verified sender', color: 'text-blue-600' },
              { label: 'CTA Interactions', val: '38.7%', change: '1-tap action clicks', color: 'text-zion-orange' },
              { label: 'Conversions', val: '12.8%', change: 'Completed goals', color: 'text-purple-600' },
            ].map((kpi, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#D6E4FF] shadow-xs">
                <div className="text-xs font-bold text-zion-dark-gray uppercase tracking-wider">{kpi.label}</div>
                <div className={`text-2xl sm:text-3xl font-extrabold mt-1 ${kpi.color}`}>{kpi.val}</div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">{kpi.change}</div>
              </div>
            ))}
          </div>

          {/* Realistic Telemetry Graph & Feature Badges */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D6E4FF] shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F1F5F9]">
              <div>
                <h4 className="text-base font-bold text-zion-deep-blue">Hourly Interaction Telemetry</h4>
                <p className="text-xs text-zion-dark-gray">Live engagement throughput across active RCS broadcasts</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5 text-zion-blue">
                  <span className="w-2.5 h-2.5 rounded-full bg-zion-blue inline-block" /> Delivered
                </span>
                <span className="flex items-center gap-1.5 text-zion-orange">
                  <span className="w-2.5 h-2.5 rounded-full bg-zion-orange inline-block" /> CTA Clicks
                </span>
              </div>
            </div>

            {/* SVG Telemetry Bar Chart */}
            <div className="h-48 w-full flex items-end justify-between gap-2 pt-6">
              {[
                { time: '09:00', delivered: 78, clicks: 35 },
                { time: '11:00', delivered: 92, clicks: 42 },
                { time: '13:00', delivered: 85, clicks: 38 },
                { time: '15:00', delivered: 96, clicks: 48 },
                { time: '17:00', delivered: 100, clicks: 52 },
                { time: '19:00', delivered: 88, clicks: 40 },
                { time: '21:00', delivered: 65, clicks: 28 },
              ].map((bar, bIdx) => (
                <div key={bIdx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-full">
                    <div
                      className="w-1/2 bg-zion-blue rounded-t-md transition-all duration-500 hover:opacity-80"
                      style={{ height: `${bar.delivered}%` }}
                      title={`Delivered: ${bar.delivered}%`}
                    />
                    <div
                      className="w-1/2 bg-zion-orange rounded-t-md transition-all duration-500 hover:opacity-80"
                      style={{ height: `${bar.clicks}%` }}
                      title={`Clicks: ${bar.clicks}%`}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">{bar.time}</span>
                </div>
              ))}
            </div>

            {/* Analytics Feature Badges */}
            <div className="mt-8 pt-6 border-t border-[#F1F5F9] grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                'Delivery Tracking',
                'Read Status',
                'Button Clicks',
                'Engagement Analytics',
                'Campaign Reports'
              ].map((feat, fIdx) => (
                <div key={fIdx} className="px-3 py-2 rounded-xl bg-[#EEF4FF] text-xs font-bold text-zion-blue border border-[#D6E4FF]">
                  ✓ {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. INTEGRATION (DEVELOPER CODE PREVIEW & STACK BADGES) ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Integration Info & Badges */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Developer & Enterprise Ready
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue tracking-tight leading-tight mb-4">
              Integrate RCS Into <br />
              <span className="text-zion-orange">Your Existing Stack</span>
            </h2>

            <p className="text-zion-dark-gray text-base leading-relaxed mb-6 font-normal">
              Connect RCS with your CRM, applications and customer workflows. Trigger rich campaigns automatically and capture real-time inbound webhook replies.
            </p>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['REST API', 'Webhooks', 'Node.js', 'Python', 'PHP', 'Java', 'CRM', 'ERP'].map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#EEF4FF] text-zion-deep-blue border border-[#D6E4FF]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="btn-orange-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-md shadow-orange-500/20"
            >
              <span>View RCS API Documentation →</span>
            </Link>
          </div>

          {/* Right: Dark Terminal Code Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#071B3A] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden text-xs font-mono">
              <div className="bg-[#030B1B] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 text-[11px] ml-2 font-mono">POST /v2/rcs/messages</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-5 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
{`curl -X POST https://api.zionmarketing.com/v2/rcs/messages \\
  -H "Authorization: Bearer ZION_API_KEY_SEC_9981" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "agent_id": "zion_siddha_sky",
    "message_type": "rich_card",
    "content": {
      "title": "Siddha Sky - Luxury 3BHK Residences",
      "description": "Experience skywalk living with 35+ lifestyle amenities.",
      "media_url": "https://cdn.zionmarketing.com/media/siddha-sky.jpg",
      "suggestions": [
        { "action": "open_url", "text": "View Brochure", "url": "https://zion.re/sky" },
        { "action": "dial_phone", "text": "Book Site Visit", "phone": "+919876500000" }
      ]
    },
    "fallback": {
      "enabled": true,
      "channel": "sms",
      "text": "Siddha Sky: Explore 3BHK luxury residences at EM Bypass."
    }
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. HOW RCS WORKS (4-STEP PROCESS) ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Simple 4-Step Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
              How RCS <span className="text-zion-orange">Works</span>
            </h2>
            <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
              From creative design to high-throughput dispatch in four seamless steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howRcsWorks.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 card-lift flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-extrabold text-[#D6E4FF] mb-4 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-extrabold text-zion-deep-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zion-dark-gray leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. COMPLIANCE & TRUST (6 ENTERPRISE CARDS) ── */}
      <section className="py-20 reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
            Security & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue">
            Enterprise-Ready <span className="text-zion-orange">RCS</span>
          </h2>
          <p className="text-zion-dark-gray text-base mt-4 max-w-2xl mx-auto font-normal">
            Bank-grade encryption, verified brand profiles, and direct carrier tier-1 gateways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {trustCards.map((trust, idx) => {
            const Icon = trust.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#D6E4FF] hover:border-zion-blue shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-[#EEF4FF] border border-[#D6E4FF] w-fit mb-5 text-zion-blue">
                    <Icon className="w-7 h-7 text-zion-blue" />
                  </div>
                  <h3 className="text-lg font-extrabold text-zion-deep-blue mb-2.5">
                    {trust.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zion-dark-gray leading-relaxed font-normal">
                    {trust.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 12. FAQ SECTION (SINGLE-OPEN ACCORDION) ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] text-xs font-bold text-zion-blue uppercase tracking-wider mb-4">
              Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zion-deep-blue">
              Frequently Asked <span className="text-zion-orange">Questions</span>
            </h2>
            <p className="text-zion-dark-gray text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
              Everything you need to know about ZION RCS Business Messaging infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#D6E4FF] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zion-deep-blue hover:text-zion-orange transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-[#EEF4FF] flex items-center justify-center flex-shrink-0 text-zion-blue">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zion-dark-gray leading-relaxed border-t border-[#F1F5F9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 13. FINAL CTA ── */}
      <section className="py-20 reveal max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#102F68] to-[#071B3A] text-white shadow-2xl shadow-blue-950/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Make Your Messages <br className="hidden sm:inline" />
            <span className="text-zion-orange">More Powerful</span>?
          </h2>
          <p className="text-blue-100/90 text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Turn every customer message into a branded, interactive experience with ZION RCS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-orange-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-orange-950/20"
            >
              <span>Talk to Our RCS Experts →</span>
            </Link>
            <Link
              to="/contact"
              className="btn-secondary-white w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Get RCS Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const ProductPage: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '');
  const product = products[slug];

  useEffect(() => {
    if (product) {
      document.title = product.metaTitle;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-zion-deep-blue">
        <div className="text-center p-8 bg-[#EEF4FF] rounded-2xl border border-[#D6E4FF] max-w-md shadow-card">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-zion-dark-gray mb-6">The communication solution you're looking for does not exist.</p>
          <Link to="/" className="btn-orange-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Enterprise Product Pages Routing
  if (slug === 'sms') return <BulkSMSPageView />;
  if (slug === 'rcs') return <RcsBusinessMessagingView />;
  if (slug === 'whatsapp') return <WhatsAppPageView />;
  if (slug === 'meta') return <MetaMessagingPageView />;
  if (slug === 'ivr') return <IvrPageView />;
  if (slug === 'obd') return <ObdVoicePageView />;
  if (slug === 'smpp') return <SmppPageView />;
  if (slug === 'api-integration') return <EnterpriseApisPageView />;
  if (slug === 'site-branding') return <RealEstateBrandingView />;

  return <StandardProductView product={product} />;
};

export default ProductPage;


