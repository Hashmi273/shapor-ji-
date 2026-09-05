import React from 'react';

interface ServiceIconProps {
  type: 'sms' | 'rcs' | 'whatsapp' | 'meta' | 'obd' | 'ivr' | 'smpp' | 'api-integration' | 'site-branding';
  className?: string;
}

// Reusable Optical Blob centered at cx=60, cy=60 with uniform 82px diameter
function StandardBlob({ color }: { color: string }) {
  return (
    <circle cx="60" cy="60" r="42" fill={color} />
  );
}

// Unified ServiceIcon Component that renders all 9 icons inside the exact same 120x120 SVG viewport
export function ServiceIcon({ type, className = "w-full h-full" }: ServiceIconProps) {
  return (
    <div className={`w-[120px] h-[120px] mx-auto flex items-center justify-center relative flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* 1. Bulk SMS */}
        {type === 'sms' && (
          <g>
            <StandardBlob color="#FFF0E5" />
            
            {/* Phone Shadow & Body */}
            <rect x="28" y="22" width="50" height="76" rx="10" fill="#102F68" />
            
            {/* Phone Screen */}
            <rect x="31" y="26" width="44" height="68" rx="7" fill="#F8FAFC" />
            
            {/* Camera notch */}
            <circle cx="53" cy="24" r="1.5" fill="#64748B" />

            {/* Content text lines */}
            <rect x="37" y="35" width="22" height="3" rx="1.5" fill="#D6E4FF" />
            <rect x="37" y="41" width="32" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="37" y="47" width="28" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="37" y="53" width="18" height="3" rx="1.5" fill="#E2E8F0" />
            
            {/* Home bar */}
            <rect x="46" y="88" width="14" height="2" rx="1" fill="#CBD5E1" />

            {/* Orange SMS Chat Bubble */}
            <g filter="drop-shadow(0 4px 8px rgba(255, 107, 0, 0.4))">
              <path 
                d="M54 38C54 33 58 29 63 29H97C102 29 106 33 106 38V58C106 63 102 67 97 67H74L61 76V67C57 67 54 63 54 59V38Z" 
                fill="#FF6B00" 
              />
              <text 
                x="80" 
                y="52.5" 
                fill="#FFFFFF" 
                fontSize="13" 
                fontWeight="900" 
                fontFamily="Inter, system-ui, sans-serif" 
                textAnchor="middle" 
                letterSpacing="0.6"
              >
                SMS
              </text>
            </g>

            {/* Sound burst alert rays */}
            <path d="M96 20L102 15" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M104 27L110 25" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M89 17L91 11" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* 2. RCS Business Messaging */}
        {type === 'rcs' && (
          <g>
            <StandardBlob color="#EEF4FF" />

            {/* Phone Outline */}
            <rect x="26" y="18" width="60" height="84" rx="11" fill="#FFFFFF" stroke="#102F68" strokeWidth="3.5" />
            <rect x="47" y="21" width="18" height="2.5" rx="1.25" fill="#102F68" />

            {/* Rich Media Banner */}
            <rect x="33" y="28" width="46" height="32" rx="4" fill="#D6E4FF" />
            <circle cx="67" cy="36" r="3.5" fill="#FF6B00" />
            <path d="M35 57L46 42L58 55L64 49L77 59H35V57Z" fill="#3B82F6" />

            {/* Text preview lines */}
            <rect x="33" y="65" width="46" height="2.5" rx="1.25" fill="#94A3B8" />
            <rect x="33" y="70" width="32" height="2.5" rx="1.25" fill="#CBD5E1" />

            {/* CTA Buttons */}
            <rect x="33" y="76" width="20" height="11" rx="5.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
            <text x="43" y="84" fill="#102F68" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">View</text>
            
            <rect x="57" y="76" width="22" height="11" rx="5.5" fill="#FF6B00" />
            <text x="68" y="84" fill="#FFFFFF" fontSize="5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">Buy Now</text>

            {/* Verified Badge */}
            <g filter="drop-shadow(0 2px 5px rgba(16, 47, 104, 0.25))">
              <circle cx="89" cy="26" r="10" fill="#2563EB" />
              <path d="M85 26L88 29L93.5 23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        )}

        {/* 3. WhatsApp Business API */}
        {type === 'whatsapp' && (
          <g>
            <StandardBlob color="#E8F8F0" />

            {/* Green WhatsApp Speech Bubble (Prominent & Centered) */}
            <g filter="drop-shadow(0 5px 12px rgba(37, 211, 102, 0.3))">
              <path 
                d="M60 25C40.67 25 25 40.67 25 60C25 67.2 27.2 74 31 79.6L27 94L42 90.2C47.3 93.3 53.4 95 60 95C79.33 95 95 79.33 95 60C95 40.67 79.33 25 60 25Z" 
                fill="#25D366" 
              />
            </g>

            {/* Crisp White Handset */}
            <path 
              d="M45 42C43.5 39 41 39 39 39C37.5 39 36 39.5 35 41C33.5 42.5 30 46.5 30 54C30 61.5 35.5 68.5 37 70C38.5 71.5 48 86 63 91C75 95 78 93.5 80.5 93C83.5 92.5 88.5 88.5 89.5 85C90.5 81.5 90.5 78.5 90 78C89.5 77.5 88 77 86 76C84 75 75.5 70.5 73.5 70C71.5 69.5 70 69 69 71.5C68 74 64.5 78 63 79C61.5 80 59.5 80 57.5 79C55.5 78 49.5 76 43 70C38 65 34.5 59 33.5 57.5C32.5 56 33.5 55 34.5 54C35.5 53 36.5 51.5 37.5 50C38.5 48.5 39 47.5 39.5 46C40 44.5 39.5 43.5 39 42.5C38.5 41.5 45.5 42 45 42Z" 
              fill="#FFFFFF" 
            />

            {/* Verified Badge */}
            <g filter="drop-shadow(0 2px 5px rgba(16, 47, 104, 0.25))">
              <circle cx="89" cy="28" r="10" fill="#2563EB" />
              <path d="M85 28L88 31L93.5 25" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        )}

        {/* 4. Meta Messaging */}
        {type === 'meta' && (
          <g>
            <StandardBlob color="#FFF0ED" />

            {/* Meta Infinity Symbol (Scaled up and centered) */}
            <g filter="drop-shadow(0 4px 8px rgba(0, 100, 224, 0.25))">
              <path 
                d="M42 30C32.5 30 25 37.5 25 47C25 56.5 32.5 64 42 64C49.5 64 56.5 58.5 60 51C63.5 58.5 70.5 64 78 64C87.5 64 95 56.5 95 47C95 37.5 87.5 30 78 30C70.5 30 63.5 35.5 60 43C56.5 35.5 49.5 30 42 30ZM42 39C46.5 39 51 42.5 54.5 47C51 51.5 46.5 55 42 55C37.5 55 34 51.5 34 47C34 42.5 37.5 39 42 39ZM78 39C82.5 39 86 42.5 86 47C86 51.5 82.5 55 78 55C73.5 55 69 51.5 65.5 47C69 42.5 73.5 39 78 39Z" 
                fill="#0064E0" 
              />
            </g>

            {/* 3 Circular Social Channel Icons */}
            {/* Facebook */}
            <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))">
              <circle cx="35" cy="80" r="11" fill="#1877F2" />
              <path d="M36.8 76H39V73.5C39 71.8 37.8 70.5 35.5 70.5H33V73H34.5C35.2 73 35.5 73.4 35.5 74.2V76H33V78.5H35.5V86H38.2V78.5H40.5L41 76H36.8Z" fill="#FFFFFF" />
            </g>

            {/* Instagram */}
            <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))">
              <defs>
                <linearGradient id="instaGradU" x1="49" y1="91" x2="71" y2="69" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="30%" stopColor="#F77737" />
                  <stop offset="60%" stopColor="#F56040" />
                  <stop offset="100%" stopColor="#C13584" />
                </linearGradient>
              </defs>
              <rect x="49" y="69" width="22" height="22" rx="6.5" fill="url(#instaGradU)" />
              <rect x="54" y="74" width="12" height="12" rx="3" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
              <circle cx="60" cy="80" r="3" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
              <circle cx="64" cy="76" r="0.8" fill="#FFFFFF" />
            </g>

            {/* Messenger */}
            <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))">
              <defs>
                <linearGradient id="msgGradU" x1="74" y1="69" x2="96" y2="91" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00B2FF" />
                  <stop offset="50%" stopColor="#006AFF" />
                  <stop offset="100%" stopColor="#9B00E8" />
                </linearGradient>
              </defs>
              <circle cx="85" cy="80" r="11" fill="url(#msgGradU)" />
              <path d="M79.5 83L84 76.5L87.2 79.2L91.5 76.5L87 83L83.8 80.3L79.5 83Z" fill="#FFFFFF" />
            </g>
          </g>
        )}

        {/* 5. OBD / Voice Calls */}
        {type === 'obd' && (
          <g>
            <StandardBlob color="#EEF4FF" />

            {/* Navy Telephone Handset */}
            <g filter="drop-shadow(0 4px 10px rgba(16, 47, 104, 0.25))">
              <path 
                d="M42 32C36.5 32 32 36.5 30 42C27.5 51 31 69 46 84C61 99 79 102.5 88 100C93.5 98 98 93.5 98 88V80C98 77.5 95.5 75.5 92.5 74.5L80 72C77.5 71 74.5 72.5 73.5 75L70 79.5C60 75 53 68 48.5 58L53 54.5C55.5 53.5 57 50.5 56 48L53.5 35.5C52.5 32.5 50.5 32 48 32H42Z" 
                fill="#102F68" 
              />
            </g>

            {/* 3 Concentric Orange Sound Waves */}
            <path d="M78 39C84 45 88 52 88 61" stroke="#FF6B00" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M88 29C97 38 102 49 102 62" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" />
            <path d="M98 19C111 32 117 46 117 63" stroke="#FF6B00" strokeWidth="4.5" strokeLinecap="round" />
          </g>
        )}

        {/* 6. Smart IVR */}
        {type === 'ivr' && (
          <g>
            <StandardBlob color="#FFF2EB" />

            {/* 3x3 Keypad Grid (Substantially enlarged & centered) */}
            {/* Row 1 (y=32) */}
            <circle cx="34" cy="32" r="9.5" fill="#102F68" />
            <text x="34" y="36.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">1</text>
            
            <circle cx="60" cy="32" r="9.5" fill="#102F68" />
            <text x="60" y="36.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">2</text>
            
            <circle cx="86" cy="32" r="9.5" fill="#102F68" />
            <text x="86" y="36.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">3</text>

            {/* Row 2 (y=58) */}
            <circle cx="34" cy="58" r="9.5" fill="#102F68" />
            <text x="34" y="62.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">4</text>
            
            {/* Key 5 Highlighted in Vibrant Orange */}
            <g filter="drop-shadow(0 4px 10px rgba(255, 107, 0, 0.5))">
              <circle cx="60" cy="58" r="12" fill="#FF6B00" />
              <text x="60" y="63" fill="#FFFFFF" fontSize="13.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">5</text>
            </g>
            
            <circle cx="86" cy="58" r="9.5" fill="#102F68" />
            <text x="86" y="62.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">6</text>

            {/* Row 3 (y=84) */}
            <circle cx="34" cy="84" r="9.5" fill="#102F68" />
            <text x="34" y="88.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">7</text>
            
            <circle cx="60" cy="84" r="9.5" fill="#102F68" />
            <text x="60" y="88.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">8</text>

            {/* Orange Pointing Hand Cursor */}
            <g filter="drop-shadow(0 4px 8px rgba(255, 107, 0, 0.4))">
              <path 
                d="M70 70L65 60C63.5 58 65.5 56 67.5 57.5L74 62.5V67L80 66C82 66 83 67.5 82.5 69.5L82 70.5C84 70.5 85 72 84.5 74L84 75C86 75 86.5 76.5 86 78.5L84 85C82 91 77 95 71 95H67C62 95 57 91 56 86L54 76C53 72 56 69.5 60 69.5H70Z" 
                fill="#FF6B00" 
                stroke="#FFFFFF" 
                strokeWidth="2.5" 
              />
            </g>
          </g>
        )}

        {/* 7. SMPP Connectivity */}
        {type === 'smpp' && (
          <g>
            <StandardBlob color="#EEF4FF" />

            {/* 3-Tier Enterprise Rack Server Stack */}
            {/* Rack 1 */}
            <rect x="25" y="25" width="60" height="17" rx="4" fill="#102F68" />
            <rect x="33" y="32" width="14" height="3" rx="1.5" fill="#FFFFFF" />
            <circle cx="66" cy="33.5" r="1.8" fill="#D6E4FF" />
            <circle cx="73" cy="33.5" r="1.8" fill="#D6E4FF" />
            <circle cx="80" cy="33.5" r="1.8" fill="#FF6B00" />

            {/* Rack 2 */}
            <rect x="25" y="46" width="60" height="17" rx="4" fill="#102F68" />
            <rect x="33" y="53" width="14" height="3" rx="1.5" fill="#FFFFFF" />
            <circle cx="66" cy="54.5" r="1.8" fill="#D6E4FF" />
            <circle cx="73" cy="54.5" r="1.8" fill="#FF6B00" />
            <circle cx="80" cy="54.5" r="1.8" fill="#D6E4FF" />

            {/* Rack 3 */}
            <rect x="25" y="67" width="60" height="17" rx="4" fill="#102F68" />
            <rect x="33" y="74" width="14" height="3" rx="1.5" fill="#FFFFFF" />
            <circle cx="66" cy="75.5" r="1.8" fill="#FF6B00" />
            <circle cx="73" cy="75.5" r="1.8" fill="#D6E4FF" />
            <circle cx="80" cy="75.5" r="1.8" fill="#D6E4FF" />

            {/* Floating Two-Way Transfer Badge */}
            <g filter="drop-shadow(0 4px 10px rgba(16, 47, 104, 0.25))">
              <circle cx="86" cy="74" r="14.5" fill="#FFFFFF" />
              <path d="M79 71H92M92 71L88 67M92 71L88 75" stroke="#FF6B00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M93 77H80M80 77L84 73M80 77L84 81" stroke="#FF6B00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        )}

        {/* 8. Enterprise Communication APIs */}
        {type === 'api-integration' && (
          <g>
            <StandardBlob color="#FFF2EB" />

            {/* Browser API Window */}
            <g filter="drop-shadow(0 5px 12px rgba(16, 47, 104, 0.2))">
              <rect x="24" y="24" width="60" height="50" rx="7" fill="#FFFFFF" stroke="#102F68" strokeWidth="3" />
              
              {/* Titlebar */}
              <path d="M25.5 25.5H82.5V34H25.5V25.5Z" fill="#102F68" />
              
              {/* Dots */}
              <circle cx="32" cy="29.5" r="1.5" fill="#FF6B00" />
              <circle cx="37" cy="29.5" r="1.5" fill="#CBD5E1" />
              <circle cx="42" cy="29.5" r="1.5" fill="#94A3B8" />

              {/* Bold API text */}
              <text 
                x="54" 
                y="57" 
                fill="#102F68" 
                fontSize="16" 
                fontWeight="900" 
                fontFamily="Inter, system-ui, sans-serif" 
                textAnchor="middle" 
                letterSpacing="1"
              >
                API
              </text>
            </g>

            {/* Orange Cogwheel / Gear Icon */}
            <g filter="drop-shadow(0 4px 10px rgba(255, 107, 0, 0.4))">
              <circle cx="88" cy="74" r="14.5" fill="#FF6B00" />
              <path 
                d="M88 63V60M88 88V85M99 74H102M74 74H77M95.5 66.5L97.5 64.5M78.5 83.5L80.5 81.5M95.5 81.5L97.5 83.5L78.5 64.5L80.5 66.5" 
                stroke="#FFFFFF" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
              <circle cx="88" cy="74" r="5" fill="#FFFFFF" />
            </g>
          </g>
        )}

        {/* 9. Real Estate Project & Site Branding */}
        {type === 'site-branding' && (
          <g>
            <StandardBlob color="#EEF4FF" />

            {/* Towers */}
            <g filter="drop-shadow(0 5px 10px rgba(16, 47, 104, 0.2))">
              <rect x="32" y="24" width="30" height="64" rx="3.5" fill="#102F68" />
              <rect x="38" y="31" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="47" y="31" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="53" y="31" width="4" height="5" rx="1" fill="#D6E4FF" />
              <rect x="38" y="42" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="47" y="42" width="5" height="5" rx="1" fill="#FF6B00" />
              <rect x="53" y="42" width="4" height="5" rx="1" fill="#D6E4FF" />
              <rect x="38" y="53" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="47" y="53" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="53" y="53" width="4" height="5" rx="1" fill="#D6E4FF" />
              <rect x="38" y="64" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="47" y="64" width="5" height="5" rx="1" fill="#D6E4FF" />
              <rect x="53" y="64" width="4" height="5" rx="1" fill="#D6E4FF" />

              <rect x="62" y="38" width="24" height="50" rx="3.5" fill="#1D4F91" />
              <rect x="68" y="45" width="4.5" height="4.5" rx="1" fill="#D6E4FF" />
              <rect x="75" y="45" width="4.5" height="4.5" rx="1" fill="#D6E4FF" />
              <rect x="68" y="56" width="4.5" height="4.5" rx="1" fill="#FF6B00" />
              <rect x="75" y="56" width="4.5" height="4.5" rx="1" fill="#D6E4FF" />
            </g>

            {/* Launch Pin/Flag */}
            <g filter="drop-shadow(0 3px 6px rgba(255, 107, 0, 0.4))">
              <circle cx="88" cy="32" r="12" fill="#FF6B00" />
              <path d="M84 27V37M84 27L93 31L84 35" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        )}

      </svg>
    </div>
  );
}

// Individual wrapper exports for backward compatibility & direct import convenience
export const BulkSmsVisual = ({ className }: { className?: string }) => <ServiceIcon type="sms" className={className} />;
export const RcsVisual = ({ className }: { className?: string }) => <ServiceIcon type="rcs" className={className} />;
export const WhatsAppVisual = ({ className }: { className?: string }) => <ServiceIcon type="whatsapp" className={className} />;
export const MetaMessagingVisual = ({ className }: { className?: string }) => <ServiceIcon type="meta" className={className} />;
export const ObdVoiceVisual = ({ className }: { className?: string }) => <ServiceIcon type="obd" className={className} />;
export const IvrVisual = ({ className }: { className?: string }) => <ServiceIcon type="ivr" className={className} />;
export const SmppVisual = ({ className }: { className?: string }) => <ServiceIcon type="smpp" className={className} />;
export const ApiIntegrationVisual = ({ className }: { className?: string }) => <ServiceIcon type="api-integration" className={className} />;
export const SiteBrandingVisual = ({ className }: { className?: string }) => <ServiceIcon type="site-branding" className={className} />;

