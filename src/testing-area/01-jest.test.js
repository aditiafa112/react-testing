import {perkalian, penjumlahan} from './angka';
import {sapaan, potonganPajak} from './text';

describe('Group Testing Angka', () => {
  test("Fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12);
    expect(penjumlahan(7, 1)).toBe(8);
  })
  
  test("Fungsi perkalian", () => {
    expect(perkalian(3, 2)).toBe(6);
    expect(perkalian(4, 8)).toBe(32);
    expect(perkalian(7, 1)).toBe(7);
  })
})

describe('Group Testing Text/String', () => {
  test("Fungsi sapaan", () => {
    expect(sapaan('adit')).toBe('hallo adit');
  })
  
  test("Fungsi potongan gaji", () => {
    expect(potonganPajak(100000)).toBe('Gaji bersih anda Rp90000');
  })
})