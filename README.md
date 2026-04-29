
 Petcare MONOREPO SETUP GUIDE

 REQUIREMENTS
----------------------------------------
- Node.js (>= 18)
- pnpm (recommended)
  Install: npm install -g pnpm

----------------------------------------
 STEP 1: GO TO PROJECT FOLDER
----------------------------------------
cd Petcare

----------------------------------------
 STEP 2: INSTALL ALL DEPENDENCIES
----------------------------------------

Install all workspace dependencies:

pnpm install


 This will install dependencies for:
- admin app
- vet app
- super-admin app
- website
- shared packages

----------------------------------------
 STEP 3: RUN ALL APPS
----------------------------------------

pnpm dev

 Turbo will start all apps together:
- admin → http://localhost:3001 (or assigned port)
- vet → http://localhost:3002
- super-admin → http://localhost:3003
- website → http://localhost:3000

----------------------------------------
 STEP 4: INSTALL NEW DEPENDENCY (GLOBAL)
----------------------------------------

If same dependency used in all apps:

pnpm add <package-name> -w

Example:
pnpm add axios -w
pnpm add lucide-react -w

----------------------------------------
STEP 5: INSTALL DEPENDENCY FOR ONE APP ONLY
----------------------------------------

Admin:
pnpm --filter admin add recharts

Vet:
pnpm --filter vet add fullcalendar

Super Admin:
pnpm --filter super-admin add chart.js

Website:
pnpm --filter website add framer-motion

----------------------------------------
 STEP 6: BUILD PROJECT
----------------------------------------

pnpm build

----------------------------------------
 STEP 7: LINT PROJECT
----------------------------------------

pnpm lint

----------------------------------------
 IMPORTANT NOTES
----------------------------------------
- Use pnpm workspace, NOT npm or yarn
- Use -w for shared dependencies
- Use --filter for app-specific dependencies
- Do NOT install node_modules manually in apps

----------------------------------------
 DONE
----------------------------------------
Now all apps are connected in monorepo system
and running via TurboRepo.