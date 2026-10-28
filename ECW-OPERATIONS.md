# ECW mail operations

The live portal is https://mail.easterncoloradoweekly.com. This fork runs ECW branding on HQBase
Stable v1.4.0. It is a custom source build, not a vendor-signed HQBase release. Keep the original
AGPL license, source link, and HQBase attribution. Review upstream Stable fixes before applying them.
The upstream one-click updater installs official assets and can replace ECW changes.

## Outgoing size policy

Cloudflare currently permits 5 MiB for a complete outgoing message to ordinary recipients.
See https://developers.cloudflare.com/email-service/platform/limits/.
For this deployment, attachments and inline images may total at most 3 MiB before encoding.
A conservative message budget also counts UTF-8 bodies and headers, base64 expansion, line wrapping,
and MIME overhead. It can reject a message below the provider's exact boundary. It does not promise
that every message under 3 MiB of attachments will send. The same check covers new mail, replies,
and forwards, including signatures and retained original files.

Reject an over-budget message before creating a send operation or calling the provider. Keep the
draft and its files editable. Do not mark this validation failure as an uncertain delivery.
Keep genuinely uncertain provider outcomes locked against automatic duplicate sending.
Draft uploads retain HQBase's 25 MiB storage limit; a draft can therefore hold files that must be
removed or replaced with sharing links before sending. Incoming mail still has Cloudflare's 25 MiB
limit. Do not silently remove a user's ordinary file attachments to fit an outgoing limit.

## Provider scope and maintenance

Cloudflare describes Email Service as transactional-only. Use a separate service for marketing
and newsletters, and verify eligibility for the intended correspondence before selecting a sole
outbound provider: https://developers.cloudflare.com/email-service/reference/faq/.

Keep deployment manifests, account identities, mailbox grants, recovery instructions, backup files,
and credentials private. None belong in this public source repository. Before deployment, follow
the private runbook for a backup and compatible rollback reference. A Worker-code rollback does
not restore database records or stored objects. HQBase's metadata checkpoint does not copy mail
objects; maintain a protected independent copy and test recovery in isolation.
