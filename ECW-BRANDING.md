# Eastern Colorado Weekly mail appearance

This customer customization starts from HQBase Stable v1.4.0. It changes the webmail appearance for
Eastern Colorado Weekly. It does not change mail delivery, account recovery, mailbox permissions,
Cloudflare authorization, or the meaning of the HQBase product and release names.

The ECW appearance uses the publication's paper, ink, forest green, and orange palette. It uses
locally served DM Sans for controls and Newsreader for the publication wordmark and page headings.
Light mode is the initial appearance. An existing explicit Light or Dark preference takes priority.
Both modes keep readable contrast, visible keyboard focus, and the existing responsive layout.
Message HTML stays in its existing sandbox and keeps sender formatting.

The sign-in and password screens use the ECW wordmark followed by the publication's simple
single-stalk wheat mark, and keep the Staff webmail label. The mail favicon uses a cream envelope
and a gold wheat accent on a forest-green tile. The publication favicon uses a cream wheat stalk
on a dark purple tile. Both shape and color must distinguish the mail tab at 16 and 32 pixels.
The sidebar, installed-app icons and Apple touch icon use the mail envelope/wheat identity.
The notification badge uses a white wheat silhouette with a transparent background.

This is a customer appearance contract. It does not change the canonical HQBase product identity
or any upstream product behavior. The affected source repository is the ECW mail fork; the
publication repository only records the release in its existing operations guide.

The sign-in and password screens keep the ECW identity and Staff webmail wording.
The product attribution keeps the complete HQBase mark and its official link. The installed-app
name, favicon, and home-screen icons use the ECW identity. The upstream HQBase mark remains intact
in its original asset. Font license files stay with the self-hosted font files.

This file records the deployment-specific visual contract. HQBase's upstream product UI reference
continues to describe the official product. This ECW variant must not be presented as an official
signed HQBase release. An official update can replace these custom assets; review and reapply the
branding changes when updating Stable. Publish the modified source under the existing AGPL license
before serving this variant to users. The first review runs locally with synthetic seed data.
