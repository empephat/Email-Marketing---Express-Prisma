# Email Marknadsföringsplattform - Projektöversikt

## Projektmål

Målet är att skapa en email-marknadsföringsplattform med stöd för användarautentisering och möjligheten att skapa och hantera marknadsföringskampanjer. Plattformen kommer att byggas med framtida möjlig AI-integration.

## Teknisk stack

- **Server**: Express.js
- **Databashantering**: Prisma ORM (med PostgreSQL eller annan kompatibel databas)
- **Autentisering**: Passport.js (valfri strategi)
- **Databas**: PostgreSQL

## Installation

1. Installera nödvändiga paket:
   - Express.js
   - Prisma ORM
   - Passport.js (med vald strategi för autentisering)
2. Sätt upp projektets mappstruktur eller använd en befintlig boilerplate:
   - [Prisma ORM Boilerplate](#)
   - [Passport Auth Boilerplate](#)

## Todo-list

### 1. Projektuppsättning

- [x] Installera nödvändiga paket (Express, Prisma, Passport, etc.)
- [x] Sätt upp en grundläggande mappstruktur för projektet
- [-] Val: Använd en tidigare Passport-projekt eller en boilerplate

### 2. Databasmodellering

- [x] Använd Prisma för att definiera följande datamodeller:
  - **User**-modell för autentisering
  - **Campaign**-modell för marknadsföringskampanjer
  - **Email**-modell för kampanjens emails
- [x] Skapa relationer:
  - **User -> Campaign** (one-to-many)
  - **Campaign -> Email** (one-to-many)
- [x] Campaign-modellen ska innehålla följande fält:
  - `CompanyName`
  - `companyDescription`
  - `productDescription`
  - `targetAudience`
  - `emails`
- [x] Email-modellen ska innehålla följande fält:
  - `subject`
  - `content`
  - `campaignId`
  - `recipients`

### 3. Autentiseringsimplementering

- [x] Konfigurera Passport.js med vald strategi (t.ex. Google OAuth)
- [ ] Skapa routes för autentisering:
  - Inloggning
  - Callback-hantering (om nödvändigt)
  - Utloggning

### 4. Kampanjhantering (CRUD-operationer)

- [ ] Skapa routes för att hantera Campaign-modellen:
  - Skapa ny kampanj
  - Hämta alla kampanjer för en användare
  - Hämta en specifik kampanj
  - Uppdatera en kampanj
  - Ta bort en kampanj

### 5. Datavalidering och Felhantering

- [ ] Implementera data-validering för skapande och uppdatering av kampanjer

### 6. Extra Uppgift: Skicka fejk-email med Resend

- [ ] Populera en email-rad med fejkdata (subject, content)
- [ ] Installera Resend
- [ ] Skapa en Resend-endpoint som tar emot en array av recipients, subject och content för att skicka email.

### 7. Dokumentation

- [ ] Skapa API-dokumentation för alla endpoints
- [ ] Dokumentera projektstruktur och setup-process
- [ ] Skapa en projektöversikt och mål

---

## Planerade Core Features

1. **Användarhantering**
   - Registrering och inloggning med Passport.js (Google OAuth)
   - Användarprofilhantering
2. **Kampanjhantering**
   - Skapa nya kampanjer
   - Redigera befintliga kampanjer
   - Lista alla kampanjer för en användare
   - Ta bort kampanjer
3. **AI-driven Innehållsgenerering** (framtida feature)
   - AI-genererat email-innehåll baserat på kampanjinformation
   - Automatisk ämnesradsgenerering
4. **Email-hantering**
   - Skapa emails kopplade till kampanjer
   - Lagra mottagare för varje email
   - Grundläggande email-innehållsredigering
5. **Utskickshantering**
   - Integrera med Resend för email-utskick
   - Spåra utskicksstatus (skickat datum/tid)
6. **Grundläggande Rapportering**
   - Visa antal mottagare per email
   - Visa utskicksdatum för emails

## Potentiella Framtida Features

1. Glömt lösenord (Local Strategy)
2. AI-driven email-optimering
3. Detaljerad rapportering och analyser
