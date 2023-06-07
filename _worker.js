/* Copyright (c) 2009 Tobias Schneider <schneider@jancona.com> */

(function(){
	var a, x, y, p, s, pc;
	var zn = [
		0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
		0x80, 0x80, 0x80, 0x80
	];
	var c = [
	  	7, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3,
		3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 3, 2,
		2, 2, 3, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6,
		6, 4, 5, 2, 3, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 6, 2, 6,
		4, 4, 4, 4, 2, 5, 2, 5, 5, 5, 5, 5, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 5, 2, 5, 4, 4, 4, 4, 2,
		4, 2, 4, 4, 4, 4, 4, 2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4,
		7, 7, 2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7
	];
	var m = new Array(0xffff);
	var k = {
		0x08: [0, 0], 0x0d: [1, 0], 0x10: [7, 1], 0x11: [2, 7], 0x12: [5, 7], 0x1b: [7, 7], 0x20: [4, 7], 0x24: [3, 6],
		0x27: [2, 0], 0x28: [7, 0], 0x2e: [0, 0], 0x41: [2, 1], 0x42: [4, 3], 0x43: [4, 2], 0x44: [2, 2], 0x45: [6, 1],
		0x46: [5, 2], 0x47: [2, 3], 0x48: [5, 3], 0x49: [1, 4], 0x4a: [2, 4], 0x4b: [5, 4], 0x4c: [2, 5], 0x4d: [4, 4],
		0x4e: [7, 4], 0x4f: [6, 4], 0x50: [1, 5], 0x51: [6, 7], 0x52: [1, 2], 0x53: [5, 1], 0x54: [6, 2], 0x55: [6, 3],
		0x56: [7, 3], 0x57: [1, 1], 0x58: [7, 2], 0x59: [1, 3], 0x5a: [4, 1], 0x30: [3, 4], 0x31: [0, 7], 0x32: [3, 7],
		0x33: [0, 1], 0x34: [3, 1], 0x35: [0, 2], 0x36: [3, 2], 0x37: [0, 3], 0x38: [3, 3], 0x39: [0, 4], 0x70: [4, 0],
		0x72: [5, 0], 0x74: [6, 0], 0x76: [3, 0], 0xde: [5, 5], 0xba: [2, 6], 0xbb: [5, 6], 0xbc: [7, 5], 0xbd: [3, 5],
		0xbe: [4, 5], 0xbf: [7, 6], 0xdc: [1, 6], 0xdd: [0, 5], 0xde: [3, 7]
	}
	var km = new Array(8);
	var jm = 0x00;
	
	function reset(){
		a = x = y = 0x00;
		p = 0x04;
		s = 0xff;
		m[0x0000] = 0x2f;
		m[0x0001] = 0x37;
		m[0xfd84] = 0xa0;
		m[0xfd85] = 0x00;
		pc = peek2(0xfffc);
	}
	
	function peek(addr){
		var value = 0x00;
		if(addr >= 0xd000 && addr <= 0xdfff){
			if(addr == 0xd012){ value = 0x00; }
			else if(addr >= 0xdc00 && addr <= 0xdcff){
				switch(addr){
					case 0xdc01:
						var cols = m[0xdc00];
						value |= cols & 0x01 ? 0x00 : km[0];
						value |= cols & 0x02 ? 0x00 : km[1];
						value |= cols & 0x04 ? 0x00 : km[2];
						value |= cols & 0x08 ? 0x00 : km[3];
						value |= cols & 0x10 ? 0x00 : km[4];
						value |= cols & 0x20 ? 0x00 : km[5];
						value |= cols & 0x40 ? 0x00 : km[6];
						value |= cols & 0x80 ? 0x00 : km[7];
						value |= jm;
						value = ~value;
						break;
					default:
						value = m[addr];
				}
			}else{ postMessage("d " + addr.toString(16)); value = 0xff; }
		} else{ value = m[addr]; }
		return value & 0xff;
	}
	
	function peek2(addr){
		return peek(addr) + (peek(addr + 1) << 8);
	}
	
	function pull(){
		s = ++s & 0xff;
		return m[0x100 + s] & 0xff;
	}
	
	function pull2(){
		return pull() + (pull() << 8);
	}
	
	function poke(addr, value){
		if(addr >= 0xa000 && addr <= 0xbfff){ return; }
		else if(addr >= 0xe000 && addr <= 0xffff){ return; }
		else{
			m[addr] = value & 0xff;
			if(addr > 0x400 && addr < 0x7e7){ postMessage("v " + (addr - 0x400) + ' ' + value); }
		}
	}
	
	function poke2(addr, value){
		poke(addr, value);
		poke(addr + 1, value >> 8);
	}
	
	function push(value){
		m[0x100 + s] = value & 0xff;
		s = --s & 0xff;
	}
	
	function push2(value){
		push(value >> 8);
		push(value);
	}
	
	function imm(){
		return pc++;
	}
	
	function zp(){
		return peek(pc++);
	}
	
	function zpX(){
		return (zp() + x) & 0xff;
	}
	
	function zpY(){
		return (zp() + y) & 0xff;
	}
	
	function abs(){
		var addr = peek2(pc);
		pc += 2;
		return addr;
	}
	
	function absX(){
		return abs() + x;
	}
	
	function absY(){
		 return abs() + y;
	}
	
	function ind(){
		 var addr = peek2(pc);
		 pc += 2;
		 return peek2(addr);
	}
	
	function indX(){
		return peek2((peek(pc++) + x) & 0xff);
	}
	
	function indY(){
		return peek2(peek(pc++)) + y;
	}
	
	function load(file, addr){
		var xhr = new XMLHttpRequest();
	    xhr.open("GET", file, false);
	    xhr.overrideMimeType("text/plain; charset=x-user-defined");
	    xhr.send(null);
	    if(xhr.status != 200){ return false; }
		var data = xhr.responseText;
		if(!addr){
			addr = (data.charCodeAt(0) & 0xff) + ((data.charCodeAt(1) & 0xff) << 8);
			data = data.substr(2);
		}
		for(var i = 0; data[i]; i++){ m[addr + i] = data.charCodeAt(i) & 0xff; }
		return true;
	}
	
	load("basic.rom", 0xa000);
	load("kernal.rom", 0xe000);
	
	fileok = false;
	
	onmessage = function(e){
		var argv = e.data.split(' ');
		var cmd = argv.shift();
		var args = argv;
		switch(cmd){
			case 'r':
				reset();
				setInterval(function(){
					var i = 0;
					while(i < 15000){
						if(pc == 0xa474){ postMessage("l Ready."); }
		                if(pc == 0xf54d){
		                	if(!fileok){ pc = 0xf550; }
		                    else{ pc = 0xf56c; }
		                }
		                if(fileok && pc == 0xf5a5){ pc = 0xf5a9; }
		                if(pc == 0xf4c8){ pc = 0xf4f0; }
		                if(pc == 0xf4f9){ pc = 0xf5a9; }
		                if(pc == 0xffbd)
		                {
							var file = '';
							var addr = x + (y << 8);
		                    for(var i = 0; i < a; i++){ file += String.fromCharCode(m[addr + i]); }
		                    if(load(file)){ fileok = true; }
		                    else { fileok = false; }
		                }
						var ir = peek(pc++);
						switch(ir){
							case 0x00: ibrk(); break;
							case 0x01: iora(indX()); break;
							case 0x02: pc--; break;
							case 0x03: iaso(indX()); break;
							case 0x04: pc++; break;
							case 0x05: iora(zp()); break;
							case 0x06: iasl(zp()); break;
							case 0x07: iaso(zp()); break;
							case 0x08: push(p | 0x10); break;
							case 0x09: iora(imm()); break;
							case 0x0a: a = asl(a); break;
							case 0x0b: ianc(imm()); break;
							case 0x0c: pc += 2; break;
							case 0x0d: iora(abs()); break;
							case 0x0e: iasl(abs()); break;
							case 0x0f: iaso(abs()); break;
							case 0x10: branch(0x80, false); break;
							case 0x11: iora(indY()); break;
							case 0x12: pc--; break;
							case 0x13: iaso(indY()); break;
							case 0x14: pc++; break;
							case 0x15: iora(zpX()); break;
							case 0x16: iasl(zpX()); break;
							case 0x17: iaso(zpX()); break;
							case 0x18: p &= 0xfe; break;
							case 0x19: iora(absY()); break;
							case 0x1a: break;
							case 0x1b: iaso(absY()); break;
							case 0x1c: pc += 2; break;
							case 0x1d: iora(absX()); break;
							case 0x1e: iasl(absX()); break;
							case 0x1f: iaso(absX()); break;
							case 0x20: ijsr(abs()); break;
							case 0x21: iand(indX()); break;
							case 0x22: pc--; break;
							case 0x23: irla(indX()); break;
							case 0x24: ibit(zp()); break;
							case 0x25: iand(zp()); break;
							case 0x26: irol(zp()); break;
							case 0x27: irla(zp()); break;
							case 0x28: p = pull(); break;
							case 0x29: iand(imm()); break;
							case 0x2a: a = rol(a); break;
							case 0x2b: ianc(imm()); break;
							case 0x2c: ibit(abs()); break;
							case 0x2d: iand(abs()); break;
							case 0x2e: irol(abs()); break;
							case 0x2f: irla(abs()); break;
							case 0x30: branch(0x80, true); break;
							case 0x31: iand(indY()); break;
							case 0x32: pc--; break;
							case 0x33: irla(indY()); break;
							case 0x34: pc++; break;
							case 0x35: iand(zpX()); break;
							case 0x36: irol(zpX()); break;
							case 0x37: irla(zpX()); break;
							case 0x38: p |= 0x01; break;
							case 0x39: iand(absY()); break;
							case 0x3a: break;
							case 0x3b: irla(absY()); break;
							case 0x3c: pc += 2; break;
							case 0x3d: iand(absX()); break;
							case 0x3e: irol(absX()); break;
							case 0x3f: irla(absX()); break;
							case 0x40: irti(); break;
							case 0x41: ieor(indX()); break;
							case 0x42: pc--; break;
							case 0x43: ilse(indX()); break;
							case 0x44: pc++; break;
							case 0x45: ieor(zp()); break;
							case 0x46: ilsr(zp()); break;
							case 0x47: ilse(zp()); break;
							case 0x48: push(a); break;
							case 0x49: ieor(imm()); break;
							case 0x4a: a = lsr(a); break;
							case 0x4b: ialr(imm()); break;
							case 0x4c: pc = abs(); break;
							case 0x4d: ieor(abs()); break;
							case 0x4e: ilsr(abs()); break;
							case 0x4f: ilse(abs()); break;
							case 0x50: branch(0x40, false); break;
							case 0x51: ieor(indY()); break;
							case 0x52: pc--; break;
							case 0x53: ilse(indY()); break;
							case 0x54: pc++; break;
							case 0x55: ieor(zpX()); break;
							case 0x56: ilsr(zpX()); break;
							case 0x57: ilse(zpX()); break;
							case 0x58: p &= 0xfb; break;
							case 0x59: ieor(absY()); break;
							case 0x5a: break;
							case 0x5b: ilse(absY()); break;
							case 0x5c: pc += 2; break;
							case 0x5d: ieor(absX()); break;
							case 0x5e: ilsr(absX()); break;
							case 0x5f: ilse(absX()); break;
							case 0x60: pc = pull2() + 1; break;
							case 0x61: add(peek(indX())); break;
							case 0x62: pc--; break;
							case 0x63: irra(indX()); break;
							case 0x64: pc++; break;
							case 0x65: add(peek(zp())); break;
							case 0x66: iror(zp()); break;
							case 0x67: irra(zp()); break;
							case 0x68: ipla(); break;
							case 0x69: add(peek(imm())); break;
							case 0x6a: a = ror(a); break;
							case 0x6b: iarr(imm()); break;
							case 0x6c: pc = ind(); break;
							case 0x6d: add(peek(abs())); break;
							case 0x6e: iror(abs()); break;
							case 0x6f: irra(abs()); break;
							case 0x70: branch(0x40, true); break;
							case 0x71: add(peek(indY())); break;
							case 0x72: pc--; break;
							case 0x73: irra(indY()); break;
							case 0x74: pc++; break;
							case 0x75: add(peek(zpX())); break;
							case 0x76: iror(zpX()); break;
							case 0x77: irra(zpX()); break;
							case 0x78: p |= 0x04; break;
							case 0x79: add(peek(absY())); break;
							case 0x7a: break;
							case 0x7b: irra(absY()); break;
							case 0x7c: pc += 2; break;
							case 0x7d: add(peek(absX())); break;
							case 0x7e: iror(absX()); break;
							case 0x7f: irra(absX()); break;
							case 0x80: pc++; break;
							case 0x81: poke(indX(), a); break;
							case 0x82: pc++; break;
							case 0x83: poke(indX(), a & x); break;
							case 0x84: poke(zp(), y); break;
							case 0x85: poke(zp(), a); break;
							case 0x86: poke(zp(), x); break;
							case 0x87: poke(zp(), a & x); break;
							case 0x88: idey(); break;
							case 0x89: pc++; break;
							case 0x8a: itxa(); break;
							case 0x8b: ixaa(imm()); break;
							case 0x8c: poke(abs(), y); break;
							case 0x8d: poke(abs(), a); break;
							case 0x8e: poke(abs(), x); break;
							case 0x8f: poke(abs(), a & x); break;
							case 0x90: branch(0x01, false); break;
							case 0x91: poke(indY(), a); break;
							case 0x92: pc--; break;
							case 0x93: iaxa(indY()); break;
							case 0x94: poke(zpX(), y); break;
							case 0x95: poke(zpX(), a); break;
							case 0x96: poke(zpY(), x); break;
							case 0x97: poke(zpY(), a & x); break;
							case 0x98: itya(); break;
							case 0x99: poke(absY(), a); break;
							case 0x9a: s = x; break;
							case 0x9b: itas(absY()); break;
							case 0x9c: isay(absX()); break;
							case 0x9d: poke(absX(), a); break;
							case 0x9e: ixas(absY()); break;
							case 0x9f: iaxa(absY()); break;
							case 0xa0: ildy(imm()); break;
							case 0xa1: ilda(indX()); break;
							case 0xa2: ildx(imm()); break;
							case 0xa3: ilax(indX()); break;
							case 0xa4: ildy(zp()); break;
							case 0xa5: ilda(zp()); break;
							case 0xa6: ildx(zp()); break;
							case 0xa7: ilax(zp()); break;
							case 0xa8: itay(); break;
							case 0xa9: ilda(imm()); break;
							case 0xaa: itax(); break;
							case 0xab: ioal(imm()); break;
							case 0xac: ildy(abs()); break;
							case 0xad: ilda(abs()); break;
							case 0xae: ildx(abs()); break;
							case 0xaf: ilax(abs()); break;
							case 0xb0: branch(0x01, true); break;
							case 0xb1: ilda(indY()); break;
							case 0xb2: pc--; break;
							case 0xb3: ilax(indY()); break;
							case 0xb4: ildy(zpX()); break;
							case 0xb5: ilda(zpX()); break;
							case 0xb6: ildx(zpY()); break;
							case 0xb7: ilax(zpY()); break;
							case 0xb8: p &= 0xbf; break;
							case 0xb9: ilda(absY()); break;
							case 0xba: itsx(); break;
							case 0xbb: ilas(indY()); break;
							case 0xbc: ildy(absX()); break;
							case 0xbd: ilda(absX()); break;
							case 0xbe: ildx(absY()); break;
							case 0xbf: ilax(absY()); break;
							case 0xc0: cmp(y, peek(imm())); break;
							case 0xc1: cmp(a, peek(indX())); break;
							case 0xc2: pc++; break;
							case 0xc3: idcm(indX()); break;
							case 0xc4: cmp(y, peek(zp())); break;
							case 0xc5: cmp(a, peek(zp())); break;
							case 0xc6: idec(zp()); break;
							case 0xc7: idcm(zp()); break;
							case 0xc8: iiny(); break;
							case 0xc9: cmp(a, peek(imm())); break;
							case 0xca: idex(); break;
							case 0xcb: isax(imm()); break;
							case 0xcc: cmp(y, peek(abs())); break;
							case 0xcd: cmp(a, peek(abs())); break;
							case 0xce: idec(abs()); break;
							case 0xcf: idcm(abs()); break;
							case 0xd0: branch(0x02, false); break;
							case 0xd1: cmp(a, peek(indY())); break;
							case 0xd2: pc--; break;
							case 0xd3: idcm(indY()); break;
							case 0xd4: pc++; break;
							case 0xd5: cmp(a, peek(zpX())); break;
							case 0xd6: idec(zpX()); break;
							case 0xd7: idcm(zpX()); break;
							case 0xd8: p &= 0xf7; break;
							case 0xd9: cmp(a, peek(absY())); break;
							case 0xda: break;
							case 0xdb: idcm(absY()); break;
							case 0xdc: pc += 2; break;
							case 0xdd: cmp(a, peek(absX())); break;
							case 0xde: idec(absX()); break;
							case 0xdf: idcm(absX()); break;
							case 0xe0: cmp(x, peek(imm())); break;
							case 0xe1: sub(peek(indX())); break;
							case 0xe2: pc++; break;
							case 0xe3: iins(indX()); break;
							case 0xe4: cmp(x, peek(zp())); break;
							case 0xe5: sub(peek(zp())); break;
							case 0xe6: iinc(zp()); break;
							case 0xe7: iins(zp()); break;
							case 0xe8: iinx(); break;
							case 0xe9: sub(peek(imm())); break;
							case 0xea: break;
							case 0xeb: sub(peek(imm())); break;
							case 0xec: cmp(x, peek(abs())); break;
							case 0xed: sub(peek(abs())); break;
							case 0xee: iinc(abs()); break;
							case 0xef: iins(abs()); break;
							case 0xf0: branch(0x02, true); break;
							case 0xf1: sub(peek(indY())); break;
							case 0xf2: pc--; break;
							case 0xf3: iins(indY()); break;
							case 0xf4: pc++; break;
							case 0xf5: sub(peek(zpX())); break;
							case 0xf6: iinc(zpX()); break;
							case 0xf7: iins(zpX()); break;
							case 0xf8: p |= 0x08; break;
							case 0xf9: sub(peek(absY())); break;
							case 0xfa: break;
							case 0xfb: iins(absY()); break;
							case 0xfc: pc += 2; break;
							case 0xfd: sub(peek(absX())); break;
							case 0xfe: iinc(absX()); break;
							case 0xff: iins(absX()); break;
						}
						i += c[ir];
					}
				}, 20);
				setInterval(irq, 20);
				break;
			case 'd':
			case 'u':
				var kc = k[args[0]];
				if(kc){
					var row = kc[0];
					var column = kc[1];
					if(cmd == 'd'){ km[column] |= 1 << row; }
					else { km[column] &= ~(1 << row); }
				}
				break;
		}
	};
	
	function irq(){
		if (!(p & 0x04)){
	        push2(pc);
	        push(p & 0xef);
	        pc = peek2(0xfffe);
	        p |= 0x04;
	    }
	}
	
	function nmi(){
		poke2(pc);
	    push(p & 0xef);
	    pc = peek2(0xfffa);
	}
	
	function asl(b){
		p &= 0x7c;
	    p |= b >> 7;
	    b = (b << 1) & 0xff;
	    p |= zn[b];
	    return b;
	}
	
	function lsr(b){
	    p &= 0x7c;
	    p |= b & 0x01;
	    b >>= 1;
	    p |= zn[b];
	    return b;
	}
	
	function rol(b){
		b <<= 1;
	    b |= p & 0x01;
	    p &= 0x7c;
	    p |= b >> 8;
	    b &= 0xff;
	    p |= zn[b];
	    return b;
	}
	
	function ror(b){
		var c = p & 0x01;
	    p &= 0x7c;
	    p |= b & 0x01;
	    b >>= 1;
	    b |= c << 7;
	    p |= zn[b];
	    return b;
	}
	
	function inc(b){
		b = ++b & 0xff;
	    p = (p & 0x7d) | zn[b];
	    return b;
	}
	
	function dec(b){
		b = --b & 0xff;
		p = (p & 0x7d) | zn[b];
		return b;
	}
	
	function add(b){
		var c = p & 0x01;
	    var d = a + b + c;
	    p &= 0x3c;
	    p |= !(~(a ^ b) & (a ^ b) & 0x80) ? 0x00 : 0x40;
	    p |= d > 0xff ? 0x01 : 0x00;
	    a = d & 0xFF;
	    p |= zn[a];
	}
	
	function sub(b){
		var c = ~p & 0x01;
	    var d = a - b - c;
	    p &= 0x3c;
	    p |= !(~(a ^ b) & (a ^ b) & 0x80) ? 0x00 : 0x40;
	    p |= d < 0 ? 0x00 : 0x01;
	    a = d & 0xff;
	    p |= zn[a];
	}
	
	function cmp(b, c){
		var d = b - c;
	    p &= 0x7c;
	    p |= d < 0 ? 0x00 : 0x01;
	    p |= zn[d & 0xff];
	}
	
	function branch(flag, status){
		var offset = peek(pc++);
	    if (!!(p & flag) == status){
	        if(offset & 0x80) { offset -= 256; }
	        pc += offset;
	    }
	}
	
	function ibrk(addr){
		poke2(pc + 1);
		push(p | 0x10);
		pc = peek2(0xfffe);
		p |= 0x14;
	}
	
	function ijsr(addr){
		push2(pc - 1);
		pc = addr;
	}
	
	function irti(){
		p = pull();
		pc = pull2();
	}
	
	function iand(addr){
		a &= peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function iora(addr){
		a |= peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function ibit(addr){
		var b = peek(addr);
		p &= 0x3d;
	    p |= b & 0xc0;
	    p |= a & b ? 0x00 : 0x02;
	}
	
	function irol(addr){
		poke(addr, rol(peek(addr)));
	}
	
	function iror(addr){
		poke(addr, ror(peek(addr)));
	}
	
	function iasl(addr){
		poke(addr, asl(peek(addr)));
	}
	
	function ilsr(addr){
		poke(addr, lsr(peek(addr)));
	}
	
	function ipla(addr){
		a = pull();
		p = (p & 0x7d) | zn[a];
	}
	
	function ieor(addr){
		a ^= peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function itax(addr){
		x = a;
		p = (p & 0x7d) | zn[x];
	}
	
	function itay(addr){
		y = a;
		p = (p & 0x7d) | zn[y];
	}
	
	function itxa(addr){
		a = x;
		p = (p & 0x7d) | zn[a];
	}
	
	function itya(addr){
		a = y;
		p = (p & 0x7d) | zn[a];
	}
	
	function itsx(addr){
		x = s;
		p = (p & 0x7d) | zn[x];
	}
	
	function ilda(addr){
		a = peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function ildx(addr){
		x = peek(addr);
		p = (p & 0x7d) | zn[x];
	}
	
	function ildy(addr){
		y = peek(addr);
		p = (p & 0x7d) | zn[y];
	}
	
	function idec(addr){
		poke(addr, dec(peek(addr)));
	}
	
	function idex(addr){
		x = --x & 0xff;
		p = (p & 0x7d) | zn[x];
	}
	
	function idey(addr){
		y = --y & 0xff;
		p = (p & 0x7d) | zn[y];
	}
	
	function iinc(addr){
		poke(addr, inc(peek(addr)));
	}
	
	function iinx(addr){
		x = ++x & 0xff;
		p = (p & 0x7d) | zn[x];
	}
	
	function iiny(addr){
		y = ++y & 0xff;
		p = (p & 0x7d) | zn[y];
	}
	
	function iaso(addr){
		var b = asl(peek(addr));
		poke(addr, b);
		a = x = a | b;
		p = (p & 0x7d) | zn[a];
	}
	
	function ianc(addr){
		a &= peek(pc++);
		p = (p & 0x7d) | zn[a];
		p |= (p & 0x80) >> 7;
	}
	
	function irla(addr){
		var b = rol(peek(addr));
		poke(addr, b);
		a &= b;
		p = (p & 0x7d) | zn[a];
	}
	
	function ilse(addr){
		var b = lsr(peek(addr));
		poke(addr, b);
		a ^= b;
		p = (p & 0x7d) | zn[a];
	}
	
	function ialr(addr){
		a &= peek(pc++);
		p = (p & 0x7d) | zn[a];
		a = lsr(a);
	}
	
	function irra(addr){
		var b = ror(peek(addr));
		poke(addr, b);
		add(b);
	}
	
	function iarr(addr){
		a &= peek(pc++);
		p = (p & 0x7d) | zn[a];
		a = ror(a);
	}
	
	function iaxa(addr){
		var b = (addr >> 8) + 1;
		poke(addr, a & x & b);
	}
	
	function itas(addr){
		s = a & x;
		var b = (addr >> 8) + 1;
		poke(addr, s & b);
	}
	
	function ixaa(addr){
		a = x & peek(pc++);
		p = (p & 0x7d) | zn[a];
	}
	
	function ixas(addr){
		var b = (addr >> 8) + 1;
		poke(addr, x & b);
	}
	
	function isay(addr){
		var b = (addr >> 8) + 1;
		poke(addr, y & b);
	}
	
	function ilax(addr){
		a = x = peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function ilas(addr){
		a = x = s = peek(addr) & s;
		p = (p & 0x7d) | zn[a];
	}
	
	function ioal(addr){
		a = x = (a | 0xee) & peek(addr);
		p = (p & 0x7d) | zn[a];
	}
	
	function idcm(addr){
		var b = (peek(addr) - 1) & 0xff;
		poke(addr, b);
		cmp(a, b);
	}
	
	function isax(addr){
		x = (a & x) - peek(addr);
		p |= x < 0 ? 0x00 : 0x01;
		x &= 0xff;
		p = (p & 0x7d) | zn[x];
	}
	
	function iins(addr){
		var b = inc(peek(addr));
		poke(addr, b);
		sub(b);
	}
})();
