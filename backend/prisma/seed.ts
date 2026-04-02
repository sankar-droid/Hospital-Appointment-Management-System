import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

const adapter = new PrismaMariaDb({
  host: 'localhost',
  user: 'root',
  password: 'Admin@123',
  database: 'hospitalmanagementdb'
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding specializations...');

  await prisma.specialization.createMany({
    data: [
      { specializationName: 'Cardiology' },
      { specializationName: 'Neurology' },
      { specializationName: 'Dermatology' },
      { specializationName: 'Orthopedics' },
      { specializationName: 'Pediatrics' },
      { specializationName: 'Gynecology' },
      { specializationName: 'Ophthalmology' },
      { specializationName: 'Psychiatry' },
      { specializationName: 'Radiology' },
      { specializationName: 'General Surgery' },
    ],
    skipDuplicates: true
  });

  console.log('Seeding appointment statuses...');

  await prisma.appointmentStatus.createMany({
    data: [
      { status: 'Scheduled' },
      { status: 'Completed' },
      { status: 'CANCELLED' },
      { status: 'ACTIVE' },
    ],
    skipDuplicates: true
  });

  console.log('Seeding done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
