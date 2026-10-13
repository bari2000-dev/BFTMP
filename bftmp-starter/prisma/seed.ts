
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
  console.log('Seeding BFTMP lookup data...')
  await prisma.sites.createMany({
    data: [
      { site_id: 'BA-1042', site_name: 'Hansdiha Main', circle: 'JHARKHAND', ba: 'DUMKA', site_type: 'MACRO', sdca_code: 'DUMKA', latitude: 24.5, longitude: 87.2, is_hub: true, hub_level: 'HUB_L1', dependents_direct_count: 3, dependents_total_count: 11 },
      { site_id: 'BA-1043', site_name: 'Saraiyahat', circle: 'JHARKHAND', ba: 'DUMKA', site_type: 'MACRO', sdca_code: 'DUMKA', hub_site_id: 'BA-1042', hub_level: 'HUB_L2' },
      { site_id: 'BA-1044', site_name: 'Nonihat', circle: 'JHARKHAND', ba: 'DUMKA', site_type: 'MICRO', sdca_code: 'DUMKA', hub_site_id: 'BA-1042', hub_level: 'SPUR' },
    ],
    skipDuplicates: true
  })
  await prisma.faults.createMany({
    data: [
      { site_id: 'BA-1042', category: 'TRANSMISSION', severity: 'P1', alarm_time: new Date(), status: 'OPEN', reason_code: 'MW_LINK_DOWN' },
      { site_id: 'BA-1043', category: 'POWER', severity: 'P2', alarm_time: new Date(), status: 'ACKNOWLEDGED' },
    ]
  })
  console.log('Seed done')
}
main().catch(e=>{console.error(e); process.exit(1)}).finally(()=>prisma.$disconnect())
