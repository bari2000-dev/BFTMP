
export function cn(...classes: any[]){ return classes.filter(Boolean).join(' ') }
export function formatIST(date: Date){ return new Date(date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) }
