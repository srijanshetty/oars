'use strict';

angular.module('data', [])
    .service('courseData', [function () {
        return [
    {
        'Course No': 'AE201A',
        'Department': 'AE',
        'Inst. email': 'smittal@iitk.ac.in',
        'Instructor(s)': 'S MITTAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;',
        'Title': 'INTRODUCTION TO AEROSPACE ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-5'
    },
    {
        'Course No': 'AE311A',
        'Department': 'AE',
        'Inst. email': 'rkm@iitk.ac.in',
        'Instructor(s)': 'R K MATHPAL',
        'Pre-requisites': 'ESO201A,ESO204A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'COMPRESSIBLE AERODYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE321A',
        'Department': 'AE',
        'Inst. email': 'akg@iitk.ac.in',
        'Instructor(s)': 'A K GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 16:00-17:00 REQ;',
        'Title': 'FLIGHT MECHANICS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE331A',
        'Department': 'AE',
        'Inst. email': 'shekhar@iitk.ac.in',
        'Instructor(s)': 'C S UPADHYAY',
        'Pre-requisites': 'ESO202A',
        'Schedule': 'LEC: T 17:00-18:00 REQ;WF 14:00-15:00 REQ;',
        'Title': 'INTRODUCTION TO AEROSPACE STRUCTURES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE391A',
        'Department': 'AE',
        'Inst. email': 'shekhar@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-I)',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'AE401A',
        'Department': 'AE',
        'Inst. email': 'shekhar@iitk.ac.in',
        'Instructor(s)': 'C S UPADHYAY',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:00-11:00 REQ;',
        'Title': 'TECHNICAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-2-2-2'
    },
    {
        'Course No': 'AE441A',
        'Department': 'AE',
        'Inst. email': 'akushari@iitk.ac.in',
        'Instructor(s)': 'A KUSHARI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'TURBO-MACHINERY',
        'Units': '(L-T-P-D-U)         3-0-0-0-5'
    },
    {
        'Course No': 'AE451',
        'Department': 'AE',
        'Inst. email': 'rkitey@iitk.ac.in',
        'Instructor(s)': 'R KITEY, A KUSHARI',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTS IN AEROSPACE ENGINEERING',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'AE451A',
        'Department': 'AE',
        'Inst. email': 'rkitey@iitk.ac.in',
        'Instructor(s)': 'R KITEY, A KUSHARI',
        'Pre-requisites': 'AE351A',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTS IN AEROSPACE ENGINEERING',
        'Units': '(L-T-P-D-U)         0-0-3-2-5'
    },
    {
        'Course No': 'AE461',
        'Department': 'AE',
        'Inst. email': 'ashtew@iitk.ac.in',
        'Instructor(s)': 'A TEWARI',
        'Pre-requisites': 'AE211 AE321 AE322 AE341',
        'Schedule': 'LEC: F 15:00-16:00 REQ;',
        'Title': 'AIRCRAFT DESIGN-I',
        'Units': '(L-T-P-D-U)         2-0-4-0-5'
    },
    {
        'Course No': 'AE461A',
        'Department': 'AE',
        'Inst. email': 'ashtew@iitk.ac.in',
        'Instructor(s)': 'A TEWARI',
        'Pre-requisites': '',
        'Schedule': 'LEC: F 15:00-16:00 REQ;',
        'Title': 'AIRCRAFT DESIGN-I',
        'Units': '(L-T-P-D-U)         1-0-2-2-7'
    },
    {
        'Course No': 'AE471',
        'Department': 'AE',
        'Inst. email': 'shekhar@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT-I',
        'Units': '(L-T-P-D-U)         0-0-0-0-2'
    },
    {
        'Course No': 'AE471A',
        'Department': 'AE',
        'Inst. email': 'shekhar@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'B TECH PROJECT',
        'Units': '(L-T-P-D-U)         0-0-0-0-9'
    },
    {
        'Course No': 'AE601',
        'Department': 'AE',
        'Inst. email': 'erath@iitk.ac.in',
        'Instructor(s)': 'E RATHAKRISHNAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 AE01;T 09:00-10:00 AE01;',
        'Title': 'INTRO TO AEROSPACE ENGG.',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE602',
        'Department': 'AE',
        'Inst. email': 'sathesh@iitk.ac.in',
        'Instructor(s)': 'S MARIAPPAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 NWTF;',
        'Title': 'MATHEMATICS FOR AEROSPACE ENGG.',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE602A',
        'Department': 'AE',
        'Inst. email': 'sathesh@iitk.ac.in',
        'Instructor(s)': 'S MARIAPPAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 NWTF;',
        'Title': 'MATHEMATICS FOR AEROSPACE ENGG.',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE603',
        'Department': 'AE',
        'Inst. email': 'tksen@iitk.ac.in',
        'Instructor(s)': 'T K SENGUPTA, R K MATHPAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;',
        'Title': 'INTRODUCTION TO SCIENTIFIC COMPUTING',
        'Units': '(L-T-P-D-U)         2-0-1-0-4'
    },
    {
        'Course No': 'AE605',
        'Department': 'AE',
        'Inst. email': 'tksen@iitk.ac.in',
        'Instructor(s)': 'T K SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 AE04;',
        'Title': 'ADVANCED COMPUTATIONAL FLUID MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-1-0-5'
    },
    {
        'Course No': 'AE605A',
        'Department': 'AE',
        'Inst. email': 'tksen@iitk.ac.in',
        'Instructor(s)': 'T K SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 AE04;',
        'Title': 'ADVANCED COMPUTATIONAL FLUID MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE610',
        'Department': 'AE',
        'Inst. email': 'alakeshm@iitk.ac.in',
        'Instructor(s)': 'A C MANDAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 NWTF;',
        'Title': 'AERODYNAMICS-I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE610A',
        'Department': 'AE',
        'Inst. email': 'alakeshm@iitk.ac.in',
        'Instructor(s)': 'A C MANDAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 NWTF;',
        'Title': 'AERODYNAMICS-I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE611',
        'Department': 'AE',
        'Inst. email': 'das@iitk.ac.in',
        'Instructor(s)': 'D DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:30 AE04;',
        'Title': 'MEASUREMENTS IN FLUID MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE618',
        'Department': 'AE',
        'Inst. email': 'smittal@iitk.ac.in',
        'Instructor(s)': 'S MITTAL',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 09:00-10:30 AE04;',
        'Title': 'FINITE ELEMENT METHODS FOR FLUID DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE618A',
        'Department': 'AE',
        'Inst. email': 'smittal@iitk.ac.in',
        'Instructor(s)': 'S MITTAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 AE04;',
        'Title': 'FINITE ELEMENT METHODS FOR FLUID DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE647',
        'Department': 'AE',
        'Inst. email': 'akg@iitk.ac.in',
        'Instructor(s)': 'A K GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FLIGHT DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE647A',
        'Department': 'AE',
        'Inst. email': 'akg@iitk.ac.in',
        'Instructor(s)': 'A K GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FLIGHT DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE652',
        'Department': 'AE',
        'Inst. email': 'ashoke@iitk.ac.in',
        'Instructor(s)': 'ASHOKE DE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 AE04;',
        'Title': 'AIRCRAFT PROPULSION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE652A',
        'Department': 'AE',
        'Inst. email': 'ashoke@iitk.ac.in',
        'Instructor(s)': 'ASHOKE DE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 AE04;',
        'Title': 'AIRCRAFT PROPULSION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE662',
        'Department': 'AE',
        'Inst. email': 'mishra@iitk.ac.in',
        'Instructor(s)': 'D P MISHRA',
        'Pre-requisites': 'AE651/AE342',
        'Schedule': 'LEC: WF 10:30-12:00 AE01;',
        'Title': 'ROCKET ENGINE DESIGN',
        'Units': '(L-T-P-D-U)         2-0-3-0-4'
    },
    {
        'Course No': 'AE662A',
        'Department': 'AE',
        'Inst. email': 'mishra@iitk.ac.in',
        'Instructor(s)': 'D P MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'ROCKET ENGINE DESIGN',
        'Units': '(L-T-P-D-U)         2-0-3-0-9'
    },
    {
        'Course No': 'AE670',
        'Department': 'AE',
        'Inst. email': 'mohite@iitk.ac.in',
        'Instructor(s)': 'P M MOHITE',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 AE04;',
        'Title': 'AEROSPACE STRUCTURAL ANALYSIS - I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE670A',
        'Department': 'AE',
        'Inst. email': 'mohite@iitk.ac.in',
        'Instructor(s)': 'P M MOHITE',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 AE04;',
        'Title': 'AEROSPACE STRUCTURAL ANALYSIS - I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE686',
        'Department': 'AE',
        'Inst. email': 'abhis@iitk.ac.in',
        'Instructor(s)': 'ABHISHEK',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 NWTF;',
        'Title': 'HELICOPTER THEORY : DYNAMICS AND AEROELASTICITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE686A',
        'Department': 'AE',
        'Inst. email': 'abhis@iitk.ac.in',
        'Instructor(s)': 'ABHISHEK',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 NWTF;',
        'Title': 'HELICOPTER THEORY : DYNAMICS AND AEROELASTICITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE688',
        'Department': 'AE',
        'Inst. email': 'dy@iitk.ac.in',
        'Instructor(s)': 'D YADAV',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 AE01;',
        'Title': 'DYNAMICS AND VIBRATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE688A',
        'Department': 'AE',
        'Inst. email': 'dy@iitk.ac.in',
        'Instructor(s)': 'D YADAV',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 AE01;',
        'Title': 'DYNAMICS AND VIBRATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'AE689',
        'Department': 'AE',
        'Inst. email': 'cven@iitk.ac.in',
        'Instructor(s)': 'C VENKATESAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 AE01;',
        'Title': 'INTRODUCTION TO THE THEORY OF SMART STRUCTURES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'AE699',
        'Department': 'AE',
        'Inst. email': 'ashoke@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'AE799',
        'Department': 'AE',
        'Inst. email': 'ashoke@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ART106',
        'Department': 'HSS',
        'Inst. email': 'stroy@iitk.ac.in',
        'Instructor(s)': 'S T ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'ELEMENTS OF VISUAL REPRESENTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ART106A',
        'Department': 'HSS',
        'Inst. email': 'stroy@iitk.ac.in',
        'Instructor(s)': 'S T ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'ELEMENTS OF VISUAL REPRESENTATION',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'ART401',
        'Department': 'HSS',
        'Inst. email': 'ritwij@iitk.ac.in',
        'Instructor(s)': 'R BHOWMIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'APPRECIATING FAR-EASTERN CINEMA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ART401A',
        'Department': 'HSS',
        'Inst. email': 'ritwij@iitk.ac.in',
        'Instructor(s)': 'R BHOWMIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'APPRECIATING FAR-EASTERN CINEMA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ART402',
        'Department': 'HSS',
        'Inst. email': 'kppatil@iitk.ac.in',
        'Instructor(s)': 'K P PATIL',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'MODERN ART',
        'Units': '(L-T-P-D-U)         3-0-1-0-4'
    },
    {
        'Course No': 'ART402A',
        'Department': 'HSS',
        'Inst. email': 'kppatil@iitk.ac.in',
        'Instructor(s)': 'K P PATIL',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'MODERN ART',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE211A',
        'Department': 'BSBE',
        'Inst. email': 'mainakd@iitk.ac.in',
        'Instructor(s)': 'MAINAK DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;',
        'Title': 'ORGAN SYSTEM, PHYSIOLOGY AND ANATOMY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE212',
        'Department': 'BSBE',
        'Inst. email': 'sganesh@iitk.ac.in',
        'Instructor(s)': 'S GANESH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 BSBH;T 09:00-10:00 BSBH;',
        'Title': 'MOLECULAR BIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE301A',
        'Department': 'BSBE',
        'Inst. email': 'pradips@iitk.ac.in',
        'Instructor(s)': 'PRADIP SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:00-11:00 REQ;',
        'Title': 'SCIENTIFIC & PROFESSIONAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'BSE311A',
        'Department': 'BSBE',
        'Inst. email': 'sganesh@iitk.ac.in',
        'Instructor(s)': 'S. GANESH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 BSBH;T 09:00-10:00 BSBH;',
        'Title': 'MOLECULAR CELL BIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE312A',
        'Department': 'BSBE',
        'Inst. email': 'pradips@iitk.ac.in',
        'Instructor(s)': 'PRADIP SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: Th 17:00-18:00 BSBH;',
        'Title': 'MOLECULAR BIOLOGY LAB',
        'Units': '(L-T-P-D-U)         1-0-6-0-9'
    },
    {
        'Course No': 'BSE352',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'D S KATTI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: TWTh 08:00-09:00 BSBH;',
        'Title': 'BIOMATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE398A',
        'Department': 'BSBE',
        'Inst. email': 'ashokkum@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-I)',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'BSE411A',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'DHIRENDRA S. KATTI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 BSBH;',
        'Title': 'BIOMATERIALS',
        'Units': '(L-T-P-D-U)         3-0-2-0-11'
    },
    {
        'Course No': 'BSE412A',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'DHIRENDRA S. KATTI, MAINAK DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 17:00-18:00 BSBH;',
        'Title': 'BIOMATERIAL, PHYSIOLOGY & BIO-MEMS LABORATORY',
        'Units': '(L-T-P-D-U)         1-0-6-0-9'
    },
    {
        'Course No': 'BSE491',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'DHIRENDRA S. KATTI, MAINAK DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 17:00-18:00 REQ;',
        'Title': 'BSBE LAB IV BIOMECHANICS & BIOMATERIALS',
        'Units': '(L-T-P-D-U)         0-0-6-0-4'
    },
    {
        'Course No': 'BSE492',
        'Department': 'BSBE',
        'Inst. email': 'ashokkum@iitk.ac.in',
        'Instructor(s)': 'ASHOK KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'METHODS IN BIOTECHNOLOGY-I, EXPERIMENTAL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE492A',
        'Department': 'BSBE',
        'Inst. email': 'ashokkum@iitk.ac.in',
        'Instructor(s)': 'ASHOK KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'METHODS IN BIOTECHNOLOGY-I, EXPERIMENTAL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE498',
        'Department': 'BSBE',
        'Inst. email': 'ashokkum@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-0-0-5'
    },
    {
        'Course No': 'BSE498A',
        'Department': 'BSBE',
        'Inst. email': 'ashokkum@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-III)',
        'Units': '(L-T-P-D-U)         0-0-9-0-9'
    },
    {
        'Course No': 'BSE613',
        'Department': 'BSBE',
        'Inst. email': 'bushra@iitk.ac.in',
        'Instructor(s)': 'BUSHRA ATEEQ',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'CELL & MOLECULAR BIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE613A',
        'Department': 'BSBE',
        'Inst. email': 'bushra@iitk.ac.in',
        'Instructor(s)': 'BUSHRA ATEEQ',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'CELL & MOLECULAR BIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE615',
        'Department': 'BSBE',
        'Inst. email': 'mainakd@iitk.ac.in',
        'Instructor(s)': 'MAINAK DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'PHYSIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE615A',
        'Department': 'BSBE',
        'Inst. email': 'mainakd@iitk.ac.in',
        'Instructor(s)': 'MAINAK DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'PHYSIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE621',
        'Department': 'BSBE',
        'Inst. email': 'saran@iitk.ac.in',
        'Instructor(s)': 'S MATHESWARAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'MODERN INSTRUMENTAL METHODS IN BIOLOGICAL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE621A',
        'Department': 'BSBE',
        'Inst. email': 'saran@iitk.ac.in',
        'Instructor(s)': 'SARAVANAN MATHESHWARAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'MODERN INSTRUMENTAL METHODS IN BIOLOGICAL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE629',
        'Department': 'BSBE',
        'Inst. email': 'jonaki@iitk.ac.in',
        'Instructor(s)': 'JONAKI SEN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'NEUROBIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE629A',
        'Department': 'BSBE',
        'Inst. email': 'jonaki@iitk.ac.in',
        'Instructor(s)': 'JONAKI SEN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'NEUROBIOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE632',
        'Department': 'BSBE',
        'Inst. email': 'rsankar@iitk.ac.in',
        'Instructor(s)': 'R SANKARARAMAKRISHNAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 12:00-13:30 REQ;',
        'Title': 'STRUCTURAL BIOLOGY & BIOPHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE632A',
        'Department': 'BSBE',
        'Inst. email': 'rsankar@iitk.ac.in',
        'Instructor(s)': 'R SHANKARARAMAKRISHNAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 12:00-13:30 REQ;',
        'Title': 'STRUCTURAL BIOLOGY & BIOPHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE640',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'D S KATTI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'BIOMATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE640A',
        'Department': 'BSBE',
        'Inst. email': 'dsk@iitk.ac.in',
        'Instructor(s)': 'DHIRENDRA S. KATTI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'BIOMATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'BSE641',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'BIOLOGY LAB',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'BSE671',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'RESEARCH METHODS IN BIOLOGICAL SCIENCES',
        'Units': '(L-T-P-D-U)         1-0-5-0-4'
    },
    {
        'Course No': 'BSE681',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SPECIAL TOPICS IN BIOLOGICAL SCIENCES &',
        'Units': '(L-T-P-D-U)         1-0-5-0-4'
    },
    {
        'Course No': 'BSE699',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M.TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'BSE701',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'BSE702',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'BSE799',
        'Department': 'BSBE',
        'Inst. email': 'bandopa@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CE211A',
        'Department': 'CE',
        'Inst. email': 'sguha@iitk.ac.in',
        'Instructor(s)': 'S GUHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WThF 12:00-13:00 REQ;T/D: M 12:00-13:00',
        'Title': 'ENVIRONMENTAL QUALITY & POLLUTION',
        'Units': '(L-T-P-D-U)         3-0-3-0-12'
    },
    {
        'Course No': 'CE242',
        'Department': 'CE',
        'Inst. email': 'javed@iitk.ac.in',
        'Instructor(s)': 'J N MALIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTF 08:00-09:00 REQ;T/D: T 17:00-18:00 REQ;',
        'Title': 'ENGINEERING GEOSCIENCES',
        'Units': '(L-T-P-D-U)         3-0-0-1-5'
    },
    {
        'Course No': 'CE311',
        'Department': 'CE',
        'Inst. email': 'shiva@iitk.ac.in',
        'Instructor(s)': 'SHIVAM TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:00 REQ;T/D: TThF 08:00-09:00',
        'Title': 'ENGINEERING HYDROLOGY',
        'Units': '(L-T-P-D-U)         3-1-0-1-4'
    },
    {
        'Course No': 'CE321',
        'Department': 'CE',
        'Inst. email': 'dcrai@iitk.ac.in',
        'Instructor(s)': 'D C RAI',
        'Pre-requisites': 'ESO204',
        'Schedule': 'LEC: T 10:00-11:00 REQ;WF 14:00-15:00 REQ;T/D:',
        'Title': 'DESIGN OF STEEL STRUCTURES',
        'Units': '(L-T-P-D-U)         3-2-0-1-4'
    },
    {
        'Course No': 'CE321A',
        'Department': 'CE',
        'Inst. email': 'javed@iitk.ac.in',
        'Instructor(s)': 'J N MALIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;',
        'Title': 'ENGINEERING GEOSCIENCES',
        'Units': '(L-T-P-D-U)         2-0-2-0-8'
    },
    {
        'Course No': 'CE331',
        'Department': 'CE',
        'Inst. email': 'priyog@iitk.ac.in',
        'Instructor(s)': 'P GHOSH',
        'Pre-requisites': 'CE242',
        'Schedule': 'LEC: TW 15:00-16:00 REQ;F 08:00-09:00 REQ;T/D: T',
        'Title': 'SOIL MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-2-1-4'
    },
    {
        'Course No': 'CE331A',
        'Department': 'CE',
        'Inst. email': 'onkar@iitk.ac.in',
        'Instructor(s)': 'O DIKSHIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'GEOINFORMATICS',
        'Units': '(L-T-P-D-U)         3-0-2-0-11'
    },
    {
        'Course No': 'CE341A',
        'Department': 'CE',
        'Inst. email': 'anubha@iitk.ac.in',
        'Instructor(s)': 'ANUBHA GOEL',
        'Pre-requisites': 'COM200',
        'Schedule': 'LEC:',
        'Title': 'CIVIL ENGINEERING COMMUNICATION SKILLS',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'CE351A',
        'Department': 'CE',
        'Inst. email': 'priyog@iitk.ac.in',
        'Instructor(s)': 'P GHOSH',
        'Pre-requisites': 'CE242A',
        'Schedule': 'LEC: WF 15:00-16:00 REQ;',
        'Title': 'SOIL MECHANICS',
        'Units': '(L-T-P-D-U)         2-0-2-0-8'
    },
    {
        'Course No': 'CE361',
        'Department': 'CE',
        'Inst. email': 'sguha@iitk.ac.in',
        'Instructor(s)': 'S GUHA, VINOD TARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: WThF 12:00-13:00 REQ;T/D: M 12:00-13:00',
        'Title': 'ENVIRONMENTAL QUALITY & POLLUTION',
        'Units': '(L-T-P-D-U)         3-0-2-1-4'
    },
    {
        'Course No': 'CE361A',
        'Department': 'CE',
        'Inst. email': 'shiva@iitk.ac.in',
        'Instructor(s)': 'SHIVAM TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:00 REQ;',
        'Title': 'ENGINEERING HYDROLOGY',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'CE371',
        'Department': 'CE',
        'Inst. email': 'onkar@iitk.ac.in',
        'Instructor(s)': 'O DIKSHIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: Th 17:00-18:00',
        'Title': 'GEOINFORMATICS',
        'Units': '(L-T-P-D-U)         3-0-3-1-5'
    },
    {
        'Course No': 'CE371A',
        'Department': 'CE',
        'Inst. email': 'dcrai@iitk.ac.in',
        'Instructor(s)': 'D C RAI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 14:00-15:00 REQ;',
        'Title': 'DESIGN OF STEEL STRUCTURES',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'CE422A',
        'Department': 'CE',
        'Inst. email': 'prishati@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': 'CE321A/CE322A',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PHYSICAL AND ENVIRONMENTAL GEOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE441A',
        'Department': 'CE',
        'Inst. email': 'sud@iitk.ac.in',
        'Instructor(s)': 'SUDHEER MISRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 16:00-17:00 REQ;',
        'Title': 'CONSTRUCTION MANAGEMENT',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'CE442A',
        'Department': 'CE',
        'Inst. email': 'pbose@iitk.ac.in',
        'Instructor(s)': 'P BOSE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'CIVIL ENGINEERING SYSTEMS ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE451',
        'Department': 'CE',
        'Inst. email': 'pbose@iitk.ac.in',
        'Instructor(s)': 'P BOSE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;T/D: W 14:00-15:00 REQ;',
        'Title': 'SYSTEMS ANALYSIS IN CIVIL ENGG.',
        'Units': '(L-T-P-D-U)         3-0-0-1-4'
    },
    {
        'Course No': 'CE451A',
        'Department': 'CE',
        'Inst. email': 'hsrajesh@iitk.ac.in',
        'Instructor(s)': 'R SATHIAMURTHY',
        'Pre-requisites': 'CE351A, CE352A',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'APPLICATION OF GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-2-11'
    },
    {
        'Course No': 'CE454A',
        'Department': 'CE',
        'Inst. email': 'kvharish@iitk.ac.in',
        'Instructor(s)': 'HARISH K V',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'CONCRETE ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE471A',
        'Department': 'CE',
        'Inst. email': 'chakra@iitk.ac.in',
        'Instructor(s)': 'S K CHAKRABARTI',
        'Pre-requisites': 'CE272A, CE371A, CE372A',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'SPECIAL TOPICS IN STRUCTURAL DESIGN',
        'Units': '(L-T-P-D-U)         3-0-0-2-11'
    },
    {
        'Course No': 'CE481A',
        'Department': 'CE',
        'Inst. email': 'partha@iitk.ac.in',
        'Instructor(s)': 'P CHAKROBORTHY, S NAIR',
        'Pre-requisites': 'CE382A',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'TRANSPORTATION FACILITIES DESIGN',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'CE601',
        'Department': 'CE',
        'Inst. email': 'mukesh@iitk.ac.in',
        'Instructor(s)': 'MUKESH SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'STATISTICAL ANALYSIS FOR CIVIL ENGINEERS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE602',
        'Department': 'CE',
        'Inst. email': 'anubha@iitk.ac.in',
        'Instructor(s)': 'ANUBHA GOEL, MUKESH SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'ADVANCED MATHEMATICS FOR CIVIL ENGINEERS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE602A',
        'Department': 'CE',
        'Inst. email': 'anubha@iitk.ac.in',
        'Instructor(s)': 'ANUBHA GOEL, MUKESH SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'ADVANCED MATHEMATICS FOR CIVIL ENGINEERS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE610',
        'Department': 'CE',
        'Inst. email': 'ashujain@iitk.ac.in',
        'Instructor(s)': 'ASHU JAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'ADVANCED HYDROLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE610A',
        'Department': 'CE',
        'Inst. email': 'ashujain@iitk.ac.in',
        'Instructor(s)': 'ASHU JAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'ADVANCED HYDROLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE611A',
        'Department': 'CE',
        'Inst. email': 'rajeshs@iitk.ac.in',
        'Instructor(s)': 'R SRIVASTAVA',
        'Pre-requisites': '',
        'Schedule': 'LEC: Th 12:00-13:30 REQ;',
        'Title': 'ENGINEERING HYDRAULICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE611N',
        'Department': 'CE',
        'Inst. email': 'rajeshs@iitk.ac.in',
        'Instructor(s)': 'R SRIVASTAVA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'ENGINEERING HYDRAULICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE616',
        'Department': 'CE',
        'Inst. email': 'shiva@iitk.ac.in',
        'Instructor(s)': 'SHIVAM TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'SEDIMENT TRANSPORTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE616A',
        'Department': 'CE',
        'Inst. email': 'shiva@iitk.ac.in',
        'Instructor(s)': 'SHIVAM TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'SEDIMENT TRANSPORTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE620',
        'Department': 'CE',
        'Inst. email': 'vinaykg@iitk.ac.in',
        'Instructor(s)': 'VINAY K GUPTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: T 17:00-18:00 REQ;W 12:00-13:00 REQ;F',
        'Title': 'STRUCTURAL DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE620A',
        'Department': 'CE',
        'Inst. email': 'vinaykg@iitk.ac.in',
        'Instructor(s)': 'VINAY K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 17:00-18:00 REQ;W 12:00-13:00 REQ;F',
        'Title': 'STRUCTURAL DYNAMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE621A',
        'Department': 'CE',
        'Inst. email': 'smishra@iitk.ac.in',
        'Instructor(s)': 'S K MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'ENGINEERING MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE621N',
        'Department': 'CE',
        'Inst. email': 'smishra@iitk.ac.in',
        'Instructor(s)': 'S K MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'ENGINEERING MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE623',
        'Department': 'CE',
        'Inst. email': 'samitrc@iitk.ac.in',
        'Instructor(s)': 'SAMIT RAY CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'EXPERIMENTAL METHODS IN STRUCTURL ENGINEERING',
        'Units': '(L-T-P-D-U)         2-0-3-0-4'
    },
    {
        'Course No': 'CE623A',
        'Department': 'CE',
        'Inst. email': 'samitrc@iitk.ac.in',
        'Instructor(s)': 'SAMIT RAY CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'EXPERIMENTAL METHODS IN STRUCTURL ENGINEERING',
        'Units': '(L-T-P-D-U)         2-0-3-0-9'
    },
    {
        'Course No': 'CE631A',
        'Department': 'CE',
        'Inst. email': 'sarv@iitk.ac.in',
        'Instructor(s)': 'S CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'ADVANCED GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE631N',
        'Department': 'CE',
        'Inst. email': 'sarv@iitk.ac.in',
        'Instructor(s)': 'S CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'ADVANCED GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE637',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'CONSTITUTIVE MODELING OF FRICTIONAL MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE637A',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'CONSTITUTIVE MODELING OF FRICTIONAL MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE638',
        'Department': 'CE',
        'Inst. email': 'nrpatra@iitk.ac.in',
        'Instructor(s)': 'N R PATRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'GEOTECHNICAL MEASUREMENTS AND EXPLORATION',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'CE638A',
        'Department': 'CE',
        'Inst. email': 'nrpatra@iitk.ac.in',
        'Instructor(s)': 'N R PATRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'ADVANCED GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         2-0-2-0-8'
    },
    {
        'Course No': 'CE642',
        'Department': 'CE',
        'Inst. email': 'javed@iitk.ac.in',
        'Instructor(s)': 'J N MALIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'GEOLOGICAL HAZARDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE642A',
        'Department': 'CE',
        'Inst. email': 'javed@iitk.ac.in',
        'Instructor(s)': 'J N MALIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'GEOLOGICAL HAZARDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE671A',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'BHARAT LOHANI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'INTRODUCTION TO REMOTE SENSING',
        'Units': '(L-T-P-D-U)         3-0-2-0-11'
    },
    {
        'Course No': 'CE671N',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'BHARAT LOHANI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'INTRODUCTION TO REMOTE SENSING',
        'Units': '(L-T-P-D-U)         3-0-2-0-5'
    },
    {
        'Course No': 'CE674',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'GLOBAL POSITIONING SYSTEM',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'CE674A',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'GLOBAL POSITIONING SYSTEM',
        'Units': '(L-T-P-D-U)         2-0-2-0-8'
    },
    {
        'Course No': 'CE677A',
        'Department': 'CE',
        'Inst. email': 'onkar@iitk.ac.in',
        'Instructor(s)': 'O DIKSHIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'GEOSPATIAL DATA PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE677N',
        'Department': 'CE',
        'Inst. email': 'onkar@iitk.ac.in',
        'Instructor(s)': 'O DIKSHIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'GEOSPATIAL DATA PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE683',
        'Department': 'CE',
        'Inst. email': 'partha@iitk.ac.in',
        'Instructor(s)': 'P CHAKROBORTHY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'TRAFFIC ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE683A',
        'Department': 'CE',
        'Inst. email': 'partha@iitk.ac.in',
        'Instructor(s)': 'P CHAKROBORTHY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'TRAFFIC ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE689A',
        'Department': 'CE',
        'Inst. email': 'adas@iitk.ac.in',
        'Instructor(s)': 'A DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'CHARACTERIZATION OF PAVEMENT MATERIALS AND',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE689N',
        'Department': 'CE',
        'Inst. email': 'adas@iitk.ac.in',
        'Instructor(s)': 'A DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'CHARACTERIZATION OF PAVEMENT MATERIALS AND',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE699',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M. TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CE731',
        'Department': 'CE',
        'Inst. email': 'prishati@iitk.ac.in',
        'Instructor(s)': 'PRISHATI RAY CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'RISK & RELIABILITY IN GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CE731A',
        'Department': 'CE',
        'Inst. email': 'prishati@iitk.ac.in',
        'Instructor(s)': 'PRISHATI RAY CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'RISK & RELIABILITY IN GEOTECHNICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CE799',
        'Department': 'CE',
        'Inst. email': 'blohani@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHE251A',
        'Department': 'CHE',
        'Inst. email': 'sgarg@iitk.ac.in',
        'Instructor(s)': 'S GARG',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;',
        'Title': 'INTRODUCTION TO CHE AND PROCESS CALCULATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE300A',
        'Department': 'CHE',
        'Inst. email': 'joshi@iitk.ac.in',
        'Instructor(s)': 'Y M JOSHI',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'CHEMICAL ENGINEERING COMMUNICATION SKILLS',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'CHE312A',
        'Department': 'CHE',
        'Inst. email': 'anuragt@iitk.ac.in',
        'Instructor(s)': 'A TRIPATHI',
        'Pre-requisites': 'CHE211A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'HEAT TRANSFER & ITS APPLICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE313A',
        'Department': 'CHE',
        'Inst. email': 'jayantaks@iitk.ac.in',
        'Instructor(s)': 'J K SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:00 REQ;W 16:00-17:00 REQ;',
        'Title': 'MASS TRANSFER & ITS APPLICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE349A',
        'Department': 'CHE',
        'Inst. email': 'rpala@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-I)',
        'Units': '(L-T-P-D-U)         0-0-0-4-4'
    },
    {
        'Course No': 'CHE352A',
        'Department': 'CHE',
        'Inst. email': 'papte@iitk.ac.in',
        'Instructor(s)': 'P APTE',
        'Pre-requisites': 'CHE221A',
        'Schedule': 'LEC: W 14:00-15:00 REQ;',
        'Title': 'CHEMICAL PROCESS SIMULATION LAB',
        'Units': '(L-T-P-D-U)         1-0-2-0-5'
    },
    {
        'Course No': 'CHE453A',
        'Department': 'CHE',
        'Inst. email': 'nkaistha@iitk.ac.in',
        'Instructor(s)': 'N KAISTHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'CHEMICAL ENGINEERING DESIGN',
        'Units': '(L-T-P-D-U)         3-0-2-0-11'
    },
    {
        'Course No': 'CHE492A',
        'Department': 'CHE',
        'Inst. email': 'dkunzru@iitk.ac.in',
        'Instructor(s)': 'D KUNZRU',
        'Pre-requisites': '',
        'Schedule': 'LEC: W 15:00-16:00 REQ;',
        'Title': 'UNIT OPERATIONS AND PROCESS CONTROL LABORATORY',
        'Units': '(L-T-P-D-U)         1-0-3-2-8'
    },
    {
        'Course No': 'CHE494',
        'Department': 'CHE',
        'Inst. email': 'nithish@iitk.ac.in',
        'Instructor(s)': 'N VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SUMMER IN-PLANT TRAINING',
        'Units': '(L-T-P-D-U)         0-0-4-0-2'
    },
    {
        'Course No': 'CHE601',
        'Department': 'CHE',
        'Inst. email': 'chhabra@iitk.ac.in',
        'Instructor(s)': 'R CHHABRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'FUNDAMENTALS OF CHEMICAL ENGINEERING -I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE611',
        'Department': 'CHE',
        'Inst. email': 'ntewari@iitk.ac.in',
        'Instructor(s)': 'N TIWARI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'TRANSPORT PHENOMENA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE618',
        'Department': 'CHE',
        'Inst. email': 'pkbhatta@iitk.ac.in',
        'Instructor(s)': 'P K BHATTACHARYA',
        'Pre-requisites': 'CHE313',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'NEW SEPARATION PROCESSES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE618A',
        'Department': 'CHE',
        'Inst. email': 'pkbhatta@iitk.ac.in',
        'Instructor(s)': 'P K BHATTACHARYA',
        'Pre-requisites': 'CHE313A',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'NEW SEPARATION PROCESSES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE631',
        'Department': 'CHE',
        'Inst. email': 'dkunzru@iitk.ac.in',
        'Instructor(s)': 'D KUNZRU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'CHEMICAL REACTION ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE631A',
        'Department': 'CHE',
        'Inst. email': 'dkunzru@iitk.ac.in',
        'Instructor(s)': 'D KUNZRU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'CHEMICAL REACTION ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE633',
        'Department': 'CHE',
        'Inst. email': 'goutam@iitk.ac.in',
        'Instructor(s)': 'G DEO',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PRINCIPLES OF HETEROGENEOUS CATALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE633A',
        'Department': 'CHE',
        'Inst. email': 'goutam@iitk.ac.in',
        'Instructor(s)': 'G DEO',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PRINCIPLES OF HETEROGENEOUS CATALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE641',
        'Department': 'CHE',
        'Inst. email': 'rpala@iitk.ac.in',
        'Instructor(s)': 'R PALA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN CHEMICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE641A',
        'Department': 'CHE',
        'Inst. email': 'rpala@iitk.ac.in',
        'Instructor(s)': 'R PALA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN CHEMICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE661',
        'Department': 'CHE',
        'Inst. email': 'guptark@iitk.ac.in',
        'Instructor(s)': 'R K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'ANALYTICAL & MATERIAL CHARACTERIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE661A',
        'Department': 'CHE',
        'Inst. email': 'guptark@iitk.ac.in',
        'Instructor(s)': 'R K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'ANALYTICAL & MATERIAL CHARACTERIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE674',
        'Department': 'CHE',
        'Inst. email': 'srisiva@iitk.ac.in',
        'Instructor(s)': 'S SIVA KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:30 REQ;',
        'Title': 'INTRODUCTION TO NANOSCIENCE AND TECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE674A',
        'Department': 'CHE',
        'Inst. email': 'srisiva@iitk.ac.in',
        'Instructor(s)': 'S SIVAKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:30 REQ;',
        'Title': 'INTRODUCTION TO NANOSCIENCE AND TECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE678',
        'Department': 'CHE',
        'Inst. email': 'aghatak@iitk.ac.in',
        'Instructor(s)': 'A GHATAK',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'MECHANICS OF SOFT MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE678A',
        'Department': 'CHE',
        'Inst. email': 'aghatak@iitk.ac.in',
        'Instructor(s)': 'A GHATAK',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'MECHANICS OF SOFT MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE679',
        'Department': 'CHE',
        'Inst. email': 'ashuto@iitk.ac.in',
        'Instructor(s)': 'A SHARMA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'NANOFABRICATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHE679A',
        'Department': 'CHE',
        'Inst. email': 'ashuto@iitk.ac.in',
        'Instructor(s)': 'A SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'NANOFABRICATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHE699',
        'Department': 'CHE',
        'Inst. email': 'vshankar@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHE701',
        'Department': 'CHE',
        'Inst. email': 'pkbhatta@iitk.ac.in',
        'Instructor(s)': 'P K BHATTACHARYA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: T 12:00-13:00 REQ;',
        'Title': 'M. TECH. SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHE799',
        'Department': 'CHE',
        'Inst. email': 'vshankar@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHE801',
        'Department': 'CHE',
        'Inst. email': 'chhabra@iitk.ac.in',
        'Instructor(s)': 'R CHHABRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: F 08:00-09:00 REQ;',
        'Title': 'PHD SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHM101A',
        'Department': 'CHM',
        'Inst. email': 'nsg@iitk.ac.in',
        'Instructor(s)': 'N S GAJBHIYE, M RANGANATHAN',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'CHEMISTRY LABORATORY',
        'Units': '(L-T-P-D-U)         0-0-3-0-3'
    },
    {
        'Course No': 'CHM102A',
        'Department': 'CHM',
        'Inst. email': 'garaman@iitk.ac.in',
        'Instructor(s)': 'G ANANTHARAMAN, P SEN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 08:00-09:00 L8;T/D: Th 08:00-09:00 L8;',
        'Title': 'GENERAL CHEMISTRY',
        'Units': '(L-T-P-D-U)         2-1-0-0-8'
    },
    {
        'Course No': 'CHM203A',
        'Department': 'CHM',
        'Inst. email': 'vankar@iitk.ac.in',
        'Instructor(s)': 'Y D VANKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 L16;',
        'Title': 'BASIC ORGANIC CHEMISTRY-I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM303A',
        'Department': 'CHM',
        'Inst. email': 'ddethe@iitk.ac.in',
        'Instructor(s)': 'D H DETHE',
        'Pre-requisites': 'CHM203A/CHM202A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'ORGANIC CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM305A',
        'Department': 'CHM',
        'Inst. email': 'moorthy@iitk.ac.in',
        'Instructor(s)': 'J N MOORTHY',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ORGANIC QUALITATIVE & QUANTITATIVE ANALYSIS',
        'Units': '(L-T-P-D-U)         0-0-6-0-6'
    },
    {
        'Course No': 'CHM321A',
        'Department': 'CHM',
        'Inst. email': 'dgoswami@iitk.ac.in',
        'Instructor(s)': 'D GOSWAMI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 REQ;',
        'Title': 'PHYSICAL CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM345A',
        'Department': 'CHM',
        'Inst. email': 'raja@iitk.ac.in',
        'Instructor(s)': 'R ANGAMUTHU',
        'Pre-requisites': 'CHM242A',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INORGANIC CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM361A',
        'Department': 'CHM',
        'Inst. email': 'gurunath@iitk.ac.in',
        'Instructor(s)': 'R GURUNATH',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'CHEMISTRY COMMUNICATION SKILLS',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'CHM391A',
        'Department': 'CHM',
        'Inst. email': 'rameshr@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': '5TH SEMESTER UNDERGRADUATE PROJECT',
        'Units': '(L-T-P-D-U)         0-0-4-0-4'
    },
    {
        'Course No': 'CHM401',
        'Department': 'CHM',
        'Inst. email': 'ddethe@iitk.ac.in',
        'Instructor(s)': 'D H DETHE',
        'Pre-requisites': 'CHM301/CHM302',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'ORGANIC CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM421',
        'Department': 'CHM',
        'Inst. email': 'dgoswami@iitk.ac.in',
        'Instructor(s)': 'D GOSWAMI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 REQ;',
        'Title': 'PHYSICAL CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM423',
        'Department': 'CHM',
        'Inst. email': 'mchandra@iitk.ac.in',
        'Instructor(s)': 'M CHANDRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'PHYSICAL CHEMISTRY LAB',
        'Units': '(L-T-P-D-U)         0-0-6-0-2'
    },
    {
        'Course No': 'CHM423A',
        'Department': 'CHM',
        'Inst. email': 'mchandra@iitk.ac.in',
        'Instructor(s)': 'M CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHYSICAL CHEMISTRY LABORATORY',
        'Units': '(L-T-P-D-U)         0-0-6-0-6'
    },
    {
        'Course No': 'CHM441',
        'Department': 'CHM',
        'Inst. email': 'raja@iitk.ac.in',
        'Instructor(s)': 'R ANGAMUTHU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INORGANIC CHEMISTRY I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM491A',
        'Department': 'CHM',
        'Inst. email': 'rameshr@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UNDER GRADUATE PROJECT-III',
        'Units': '(L-T-P-D-U)         0-0-0-0-9'
    },
    {
        'Course No': 'CHM503',
        'Department': 'CHM',
        'Inst. email': 'mkghorai@iitk.ac.in',
        'Instructor(s)': 'M K GHORAI',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ORGANIC PREPARATION LAB',
        'Units': '(L-T-P-D-U)         0-0-6-0-2'
    },
    {
        'Course No': 'CHM521',
        'Department': 'CHM',
        'Inst. email': 'dprasad@iitk.ac.in',
        'Instructor(s)': 'D L V K PRASAD',
        'Pre-requisites': '#',
        'Schedule': 'LEC: TTh 15:30-17:00 REQ;',
        'Title': 'MATHEMATICS FOR CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM600',
        'Department': 'CHM',
        'Inst. email': 'dprasad@iitk.ac.in',
        'Instructor(s)': 'D L V K PRASAD',
        'Pre-requisites': '#',
        'Schedule': 'LEC: TTh 15:30-17:00 REQ;',
        'Title': 'MATHEMATICS FOR CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM602',
        'Department': 'CHM',
        'Inst. email': 'anands@iitk.ac.in',
        'Instructor(s)': 'ANAND SINGH',
        'Pre-requisites': 'CHM402',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'ADVANCED ORGANIC CHEMISTRY II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM602A',
        'Department': 'CHM',
        'Inst. email': 'anands@iitk.ac.in',
        'Instructor(s)': 'ANAND SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'ADVANCED ORGANIC CHEMISTRY II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM609',
        'Department': 'CHM',
        'Inst. email': 'rameshr@iitk.ac.in',
        'Instructor(s)': 'R RAMAPANICKER',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 15:30-17:00 REQ;',
        'Title': 'PRINCIPALES OF ORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM611',
        'Department': 'CHM',
        'Inst. email': 'vijendra@iitk.ac.in',
        'Instructor(s)': 'V K YADAV',
        'Pre-requisites': 'CHM401 CHM402',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'PHYSICAL ORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM611A',
        'Department': 'CHM',
        'Inst. email': 'vijendra@iitk.ac.in',
        'Instructor(s)': 'V K YADAV',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'PHYSICAL ORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM616',
        'Department': 'CHM',
        'Inst. email': 'maddali@iitk.ac.in',
        'Instructor(s)': 'M L N RAO',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'CHEMISTRY OF ORGANOMETALLIC COMPOUNDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM616A',
        'Department': 'CHM',
        'Inst. email': 'maddali@iitk.ac.in',
        'Instructor(s)': 'M L N RAO',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 15:30-17:00 REQ;',
        'Title': 'CHEMISTRY OF ORGANOMETALLIC COMPOUNDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM621',
        'Department': 'CHM',
        'Inst. email': 'gadre@iitk.ac.in',
        'Instructor(s)': 'S R GADRE',
        'Pre-requisites': 'CHM421',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'CHEMICAL BINDING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM621A',
        'Department': 'CHM',
        'Inst. email': 'gadre@iitk.ac.in',
        'Instructor(s)': 'S R GADRE',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'CHEMICAL BINDING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM629',
        'Department': 'CHM',
        'Inst. email': 'nnair@iitk.ac.in',
        'Instructor(s)': 'N NAIR',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'PRINCIPLES OF PHYSICAL CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM646',
        'Department': 'CHM',
        'Inst. email': 'akpatra@iitk.ac.in',
        'Instructor(s)': 'A K PATRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'BIO-INORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM646A',
        'Department': 'CHM',
        'Inst. email': 'akpatra@iitk.ac.in',
        'Instructor(s)': 'A K PATRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'BIO-INORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM649',
        'Department': 'CHM',
        'Inst. email': 'basker@iitk.ac.in',
        'Instructor(s)': 'B SUNDARARAJU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'PRINCIPALES OF INORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM650',
        'Department': 'CHM',
        'Inst. email': 'amalen@iitk.ac.in',
        'Instructor(s)': 'A CHANDRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'STATISTICAL MECHANICS & ITS APPL. TO CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM650A',
        'Department': 'CHM',
        'Inst. email': 'amalen@iitk.ac.in',
        'Instructor(s)': 'A CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'STATISTICAL MECHANICS & ITS APPL. TO CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM651',
        'Department': 'CHM',
        'Inst. email': 'sprath@iitk.ac.in',
        'Instructor(s)': 'S P RATH',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'CRYSTAL AND MOLECULAR STRUCTURE DETERMINATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM651A',
        'Department': 'CHM',
        'Inst. email': 'sprath@iitk.ac.in',
        'Instructor(s)': 'S P RATH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'CRYSTAL AND MOLECULAR STRUCTURE DETERMINATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM664',
        'Department': 'CHM',
        'Inst. email': 'sm@iitk.ac.in',
        'Instructor(s)': 'S MANOGARAN',
        'Pre-requisites': 'CHM422',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'MODERN PHYSICAL METHODS IN CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM664A',
        'Department': 'CHM',
        'Inst. email': 'sm@iitk.ac.in',
        'Instructor(s)': 'S MANOGARAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'MODERN PHYSICAL METHODS IN CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM683',
        'Department': 'CHM',
        'Inst. email': 'gopan@iitk.ac.in',
        'Instructor(s)': 'T G GOPAKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'SURFACES, INTERFACES, THIN FILMS & RELATED',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM683A',
        'Department': 'CHM',
        'Inst. email': 'gopan@iitk.ac.in',
        'Instructor(s)': 'T G GOPAKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'SURFACES, INTERFACES, THIN FILMS & RELATED',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM684',
        'Department': 'CHM',
        'Inst. email': 'srihari@iitk.ac.in',
        'Instructor(s)': 'K SRIHARI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'COMPUTER PROGRAMMING FOR CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM684A',
        'Department': 'CHM',
        'Inst. email': 'srihari@iitk.ac.in',
        'Instructor(s)': 'K SRIHARI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'COMPUTER PROGRAMMING FOR CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM691',
        'Department': 'CHM',
        'Inst. email': 'sabuj@iitk.ac.in',
        'Instructor(s)': 'S K KUNDU',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FRONTIERS IN INORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM691A',
        'Department': 'CHM',
        'Inst. email': 'sabuj@iitk.ac.in',
        'Instructor(s)': 'S K KUNDU',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FRONTIERS IN INORGANIC CHEMISTRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM698',
        'Department': 'CHM',
        'Inst. email': 'sverma@iitk.ac.in',
        'Instructor(s)': 'S VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'CHEMISTRY OF DRUG DESIGN AND METABOLISM',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CHM698A',
        'Department': 'CHM',
        'Inst. email': 'sverma@iitk.ac.in',
        'Instructor(s)': 'S VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'CHEMISTRY OF DRUG DESIGN AND METABOLISM',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CHM700',
        'Department': 'CHM',
        'Inst. email': 'rameshr@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT',
        'Units': '(L-T-P-D-U)         0-0-0-0-12'
    },
    {
        'Course No': 'CHM799',
        'Department': 'CHM',
        'Inst. email': 'psen@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'RESEARCH',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHM800',
        'Department': 'CHM',
        'Inst. email': 'psen@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'GENERAL SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CHM801',
        'Department': 'CHM',
        'Inst. email': 'psen@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'GRADUATE SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'COM200',
        'Department': 'COM',
        'Inst. email': 'gn@iitk.ac.in',
        'Instructor(s)': 'G NEELAKANTAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:00-12:00 L7;',
        'Title': 'COMMUNICATION SKILLS: COMPOSITION',
        'Units': '(L-T-P-D-U)         1-0-2-0-5'
    },
    {
        'Course No': 'CS201A',
        'Department': 'CSE',
        'Inst. email': 'hk@iitk.ac.in',
        'Instructor(s)': 'HARISH KARNICK',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:00 REQ;F 17:00-18:00 REQ;',
        'Title': 'MATHEMATICS FOR COMPUTER SCIENCE -I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS210',
        'Department': 'CSE',
        'Inst. email': 'sbaswana@iitk.ac.in',
        'Instructor(s)': 'SURENDER BASWANA',
        'Pre-requisites': 'ESC101N',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'DATA STRUCTURES AND ALGORITHMS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS210A',
        'Department': 'CSE',
        'Inst. email': 'sbaswana@iitk.ac.in',
        'Instructor(s)': 'SURENDER BASWANA',
        'Pre-requisites': 'ESC101A',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'DATA STRUCTURE AND ALGORITHMS',
        'Units': '(L-T-P-D-U)         3-0-3-0-12'
    },
    {
        'Course No': 'CS251A',
        'Department': 'CSE',
        'Inst. email': '',
        'Instructor(s)': '',
        'Pre-requisites': 'ESC101A',
        'Schedule': 'LEC:',
        'Title': 'COMPUTING LABORATORY-I',
        'Units': '(L-T-P-D-U)         1-0-3-0-6'
    },
    {
        'Course No': 'CS252A',
        'Department': 'CSE',
        'Inst. email': 'arnabb@iitk.ac.in',
        'Instructor(s)': 'ARNAB BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 10:00-11:00 REQ;',
        'Title': 'COMPUTING LABORATORY II',
        'Units': '(L-T-P-D-U)         1-0-3-0-6'
    },
    {
        'Course No': 'CS300A',
        'Department': 'CSE',
        'Inst. email': 'sganguly@iitk.ac.in',
        'Instructor(s)': 'SUMIT GANGULY',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'TECHNICAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'CS330A',
        'Department': 'CSE',
        'Inst. email': 'mainakc@iitk.ac.in',
        'Instructor(s)': 'MAINAK CHAUDHURI',
        'Pre-requisites': 'ESC101A,CS210A,CS220A',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'OPERATING SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-3-0-12'
    },
    {
        'Course No': 'CS340A',
        'Department': 'CSE',
        'Inst. email': 'simon@iitk.ac.in',
        'Instructor(s)': 'SUNIL E. SIMON',
        'Pre-requisites': 'ESC101A,CS210A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'THEORY OF COMPUTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS345A',
        'Department': 'CSE',
        'Inst. email': 'ppk@iitk.ac.in',
        'Instructor(s)': 'PIYUSH P. KURUR',
        'Pre-requisites': 'ESC101A,CS210A/ESO207A',
        'Schedule': 'LEC: MWF 09:00-10:00 REQ;',
        'Title': 'ALGORITHMS -II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS350A',
        'Department': 'CSE',
        'Inst. email': 'satyadev@iitk.ac.in',
        'Instructor(s)': 'SATYADEV NANDAKUMAR',
        'Pre-requisites': 'CS210A/ESO207A',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'PRINCIPLES OF PROGRAMMING LANGAUGES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS360',
        'Department': 'CSE',
        'Inst. email': 'vinaypn@iitk.ac.in',
        'Instructor(s)': 'VINAY NAMBOODIRI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'INTRODUCTION TO COMPUTER GRAPHICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS360A',
        'Department': 'CSE',
        'Inst. email': 'vinaypn@iitk.ac.in',
        'Instructor(s)': 'VINAY NAMBOODIRI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'INTRODUCTION TO COMPUTER GRAPHICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS395A',
        'Department': 'CSE',
        'Inst. email': 'skmehta@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-I)',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'CS425',
        'Department': 'CSE',
        'Inst. email': 'dheeraj@iitk.ac.in',
        'Instructor(s)': 'DHEERAJ SANGHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'COMPUTER NETWORKS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS425A',
        'Department': 'CSE',
        'Inst. email': 'dheeraj@iitk.ac.in',
        'Instructor(s)': 'DHEERAJ SANGHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'COMPUTER NETWORKS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS433',
        'Department': 'CSE',
        'Inst. email': 'ajain@iitk.ac.in',
        'Instructor(s)': 'AJAI JAIN',
        'Pre-requisites': 'ESC101N,CS210/ESO211,CS220,',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'PARALLEL PROGRAMMING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS433A',
        'Department': 'CSE',
        'Inst. email': 'ajain@iitk.ac.in',
        'Instructor(s)': 'AJAI JAIN',
        'Pre-requisites': 'ESC101A,CS210A,CS220A,CS330A,',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'PARALLEL PROGRAMMING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS601',
        'Department': 'CSE',
        'Inst. email': 'rtewari@iitk.ac.in',
        'Instructor(s)': 'RAGHUNATH TEWARI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MATHEMATICS FOR COMPUTER SCIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS601A',
        'Department': 'CSE',
        'Inst. email': 'rtewari@iitk.ac.in',
        'Instructor(s)': 'RAGHUNATH TEWARI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MATHEMATICS FOR COMPUTER SCIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS602',
        'Department': 'CSE',
        'Inst. email': 'ssax@iitk.ac.in',
        'Instructor(s)': 'SANJEEV SAXENA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'DESIGN AND ANALYSIS OF ALGORITHMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS602A',
        'Department': 'CSE',
        'Inst. email': 'ssax@iitk.ac.in',
        'Instructor(s)': 'SANJEEV SAXENA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'DESIGN AND ANALYSIS OF ALGORITHMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS632',
        'Department': 'CSE',
        'Inst. email': 'rkg@iitk.ac.in',
        'Instructor(s)': 'RATAN K. GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TOPICS IN DISTRIBUTED SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS632A',
        'Department': 'CSE',
        'Inst. email': 'rkg@iitk.ac.in',
        'Instructor(s)': 'RATAN K GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TOPICS IN DISTRIBUTED SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS639',
        'Department': 'CSE',
        'Inst. email': 'subhajit@iitk.ac.in',
        'Instructor(s)': 'SUBHAJIT ROY',
        'Pre-requisites': 'CS201/CS210/CS340',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PROGRAM ANALYSIS, VERIFICATION AND TESTING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS639A',
        'Department': 'CSE',
        'Inst. email': 'subhajit@iitk.ac.in',
        'Instructor(s)': 'SUBHAJIT ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PROGRAM ANALYSIS, VERIFICATION AND TESTING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS641',
        'Department': 'CSE',
        'Inst. email': 'manindra@iitk.ac.in',
        'Instructor(s)': 'MANINDRA AGRAWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MODERN CRYPTOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS641A',
        'Department': 'CSE',
        'Inst. email': 'manindra@iitk.ac.in',
        'Instructor(s)': 'MANINDRA AGRAWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MODERN CRYPTOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS663',
        'Department': 'CSE',
        'Inst. email': 'skmehta@iitk.ac.in',
        'Instructor(s)': 'SHASHANK MEHTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'COMPUTATIONAL GEOMETRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS663A',
        'Department': 'CSE',
        'Inst. email': 'skmehta@iitk.ac.in',
        'Instructor(s)': 'SHASHANK MEHTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'COMPUTATIONAL GEOMETRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS681',
        'Department': 'CSE',
        'Inst. email': 'nitin@iitk.ac.in',
        'Instructor(s)': 'NITIN SAXENA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'COMPUTATIONAL NUMBER THEORY AND ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS681A',
        'Department': 'CSE',
        'Inst. email': 'nitin@iitk.ac.in',
        'Instructor(s)': 'NITIN SAXENA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'COMPUTATIONAL NUMBER THEORY AND ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS682',
        'Department': 'CSE',
        'Inst. email': 'seth@iitk.ac.in',
        'Instructor(s)': 'ANIL SETH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'QUANTUM COMPUTING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS682A',
        'Department': 'CSE',
        'Inst. email': 'seth@iitk.ac.in',
        'Instructor(s)': 'ANIL SETH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'QUANTUM COMPUTING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS698I',
        'Department': 'CSE',
        'Inst. email': 'tvp@iitk.ac.in',
        'Instructor(s)': 'T V PRABHAKAR',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'DATA IN BIG DATA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS698J',
        'Department': 'CSE',
        'Inst. email': 'rmittal@iitk.ac.in',
        'Instructor(s)': 'RAJAT MITTAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;Th',
        'Title': 'TOPICS IN LINEAR PROGRAMMING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'CS698O',
        'Department': 'CSE',
        'Inst. email': 'tvp@iitk.ac.in',
        'Instructor(s)': 'PRABHAKAR T V',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'DATA IN BIG DATA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS698R',
        'Department': 'CSE',
        'Inst. email': 'rmittal@iitk.ac.in',
        'Instructor(s)': 'RAJAT MITTAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;Th',
        'Title': 'TOPICS IN LINEAR PROGRAMMING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'CS699',
        'Department': 'CSE',
        'Inst. email': 'ajain@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'CS799',
        'Department': 'CSE',
        'Inst. email': 'ajain@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'DES601',
        'Department': 'MDES',
        'Inst. email': 'stroy@iitk.ac.in',
        'Instructor(s)': 'S T ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'DESIGN THEORY',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'DES602',
        'Department': 'MDES',
        'Inst. email': 'ramans@iitk.ac.in',
        'Instructor(s)': 'RAMAN SEXANA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'DESIGN PRACTICE I',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'DES625',
        'Department': 'MDES',
        'Inst. email': 'kppatil@iitk.ac.in',
        'Instructor(s)': 'K P PATIL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'FORM AND STYLE',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'DES635',
        'Department': 'MDES',
        'Inst. email': 'satyaki@iitk.ac.in',
        'Instructor(s)': 'SATYAKI ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'METHODS FOR DESIGN RESEARCH',
        'Units': '(L-T-P-D-U)         2-0-3-0-4'
    },
    {
        'Course No': 'DES681',
        'Department': 'MDES',
        'Inst. email': 'satyaki@iitk.ac.in',
        'Instructor(s)': 'SATYAKI ROY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'DESIGN PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-6-0-4'
    },
    {
        'Course No': 'DES699',
        'Department': 'MDES',
        'Inst. email': 'ntiwari@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M DES THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'DES799',
        'Department': 'MDES',
        'Inst. email': 'ntiwari@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PH.D THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ECO201',
        'Department': 'HSS',
        'Inst. email': 'suraji@iitk.ac.in',
        'Instructor(s)': 'S SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'MICROECONOMICS - I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'ECO201A',
        'Department': 'HSS',
        'Inst. email': 'suraji@iitk.ac.in',
        'Instructor(s)': 'S SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'MICROECONOMICS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO301A',
        'Department': 'ECO',
        'Inst. email': 'sarani@iitk.ac.in',
        'Instructor(s)': 'SARANI SAHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T/D: T 09:00-10:00 REQ;',
        'Title': 'MICROECONOMICS II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO321A',
        'Department': 'ECO',
        'Inst. email': 'ssahu@iitk.ac.in',
        'Instructor(s)': 'S SAHU',
        'Pre-requisites': 'ECO221A',
        'Schedule': 'LEC: T 17:00-18:00 REQ;WF 14:00-15:00 REQ;',
        'Title': 'MACROECONOMICS-II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO341A',
        'Department': 'ECO',
        'Inst. email': 'skmathur@iitk.ac.in',
        'Instructor(s)': 'S K MATHUR, M ARSHAD RAHMAN',
        'Pre-requisites': 'MSO201A',
        'Schedule': 'LEC: WF 15:00-16:00 REQ;T/D: Th 17:00-18:00 REQ;',
        'Title': 'ECONOMETRICS I',
        'Units': '(L-T-P-D-U)         3-0-3-0-12'
    },
    {
        'Course No': 'ECO397A',
        'Department': 'ECO',
        'Inst. email': 'pmprasad@iitk.ac.in',
        'Instructor(s)': 'P M PRASAD',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'TECHNICAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'ECO408',
        'Department': 'HSS',
        'Inst. email': 'vk@iitk.ac.in',
        'Instructor(s)': 'VIMAL KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'ADVANCED MACRO ECONOMICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'ECO411A',
        'Department': 'ECO',
        'Inst. email': 'pravk@iitk.ac.in',
        'Instructor(s)': 'P KULKHRESTHA',
        'Pre-requisites': 'ECO301A',
        'Schedule': 'LEC: T 12:00-13:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'INDUSTRIAL ECONOMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO412A',
        'Department': 'ECO',
        'Inst. email': 'skmathur@iitk.ac.in',
        'Instructor(s)': 'S K MATHUR, M ARSHAD RAHMAN',
        'Pre-requisites': 'ECO201A, ECO221A, ECO341A',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'INTERNATIONAL ECONOMICS AND FINANCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO501',
        'Department': 'HSS',
        'Inst. email': 'pmprasad@iitk.ac.in',
        'Instructor(s)': 'P M PRASAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'ENVIROMENTAL ECONOMICS AND POLICY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'ECO501A',
        'Department': 'HSS',
        'Inst. email': 'pmprasad@iitk.ac.in',
        'Instructor(s)': 'P M PRASAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'ENVIROMENTAL ECONOMICS AND POLICY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ECO535',
        'Department': 'ECO',
        'Inst. email': 'tanika@iitk.ac.in',
        'Instructor(s)': 'TANIKA CHAKRABORTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'PUBLIC ECONOMICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'ECO732',
        'Department': 'HSS',
        'Inst. email': 'skmathur@iitk.ac.in',
        'Instructor(s)': 'S K MATHUR, M ARSHAD RAHMAN',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ECONOMETRICS',
        'Units': '(L-T-P-D-U)         3-0-1-0-4'
    },
    {
        'Course No': 'ECO734',
        'Department': 'HSS',
        'Inst. email': 'pravk@iitk.ac.in',
        'Instructor(s)': 'P KULKHRESTHA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'INDUSTRIAL ORGANISATION AND POLICY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ECO738',
        'Department': 'ECO',
        'Inst. email': 'kks@iitk.ac.in',
        'Instructor(s)': 'K K SAXENA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'INTER-INDUSTRY ECONOMICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ECO799',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'EE200A',
        'Department': 'EE',
        'Inst. email': 'venkats@iitk.ac.in',
        'Instructor(s)': 'K S VENKATESH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;T/D: Th 12:00-13:00',
        'Title': 'SIGNALS, SYSTEMS & NETWORKS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'EE320A',
        'Department': 'EE',
        'Inst. email': 'vasu@iitk.ac.in',
        'Instructor(s)': 'K VASUDEVAN',
        'Pre-requisites': 'EE200A',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: F 15:00-16:00',
        'Title': 'PRINCIPLES OF COMMUNICATION',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'EE330',
        'Department': 'EE',
        'Inst. email': 'saikatc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABARTI',
        'Pre-requisites': 'ESO210',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D:',
        'Title': 'POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'EE330A',
        'Department': 'EE',
        'Inst. email': 'saikatc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABARTI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D:',
        'Title': 'POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'EE370A',
        'Department': 'EE',
        'Inst. email': 'sskiyer@iitk.ac.in',
        'Instructor(s)': 'S S K IYER',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 REQ;T/D: T 17:00-18:00 REQ;',
        'Title': 'DIGITAL ELECTRONICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'EE380',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'Y N SINGH',
        'Pre-requisites': 'ESC102NESO210 EE210 EE250',
        'Schedule': 'LEC: T/D: T 12:00-13:00 REQ;Th 17:00-18:00 REQ;F',
        'Title': 'ELECTRICAL ENGINEERING LAB I',
        'Units': '(L-T-P-D-U)         0-2-6-0-4'
    },
    {
        'Course No': 'EE380A',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'Y N SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: T/D: T 12:00-13:00 REQ;Th 17:00-18:00 REQ;F',
        'Title': 'ELECTRICAL ENGINEERING LAB I',
        'Units': '(L-T-P-D-U)         0-2-6-0-12'
    },
    {
        'Course No': 'EE393A',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ELECTRICAL ENGINEERING UNDER GRADUATE PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-2-0-4'
    },
    {
        'Course No': 'EE395A',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ELECTRICAL ENGINEERING UNDER GRADUATE PROJECT',
        'Units': '(L-T-P-D-U)         0-0-0-0-9'
    },
    {
        'Course No': 'EE401A',
        'Department': 'EE',
        'Inst. email': 'utpal@iitk.ac.in',
        'Instructor(s)': 'U DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ELECTRICAL ENGINEERING COMMUNICATION SKILLS',
        'Units': '(L-T-P-D-U)         0-0-2-0-2'
    },
    {
        'Course No': 'EE442A',
        'Department': 'EE',
        'Inst. email': 'arh@iitk.ac.in',
        'Instructor(s)': 'A R HARISH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'ANTENNAS AND PROPAGATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE601',
        'Department': 'EE',
        'Inst. email': 'sircar@iitk.ac.in',
        'Instructor(s)': 'P SIRCAR',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN SIGNAL PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE601A',
        'Department': 'EE',
        'Inst. email': 'sircar@iitk.ac.in',
        'Instructor(s)': 'P SIRCAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN SIGNAL PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE604',
        'Department': 'EE',
        'Inst. email': 'sumana@iitk.ac.in',
        'Instructor(s)': 'S GUPTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'IMAGE PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE604A',
        'Department': 'EE',
        'Inst. email': 'sumana@iitk.ac.in',
        'Instructor(s)': 'S GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'IMAGE PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE605',
        'Department': 'EE',
        'Inst. email': 'akc@iitk.ac.in',
        'Instructor(s)': 'A K CHATURVEDI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'INTRODUCTION TO SIGNAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE605A',
        'Department': 'EE',
        'Inst. email': 'akc@iitk.ac.in',
        'Instructor(s)': 'A K CHATURVEDI',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'INTRODUCTION TO SIGNAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE607',
        'Department': 'EE',
        'Inst. email': 'govind@iitk.ac.in',
        'Instructor(s)': 'G SHARMA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'WAVELET TRANSFORMS FOR SIGNAL & IMAGE PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE607A',
        'Department': 'EE',
        'Inst. email': 'govind@iitk.ac.in',
        'Instructor(s)': 'G SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'WAVELET TRANSFORMS FOR SIGNAL & IMAGE PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE610',
        'Department': 'EE',
        'Inst. email': 'qureshi@iitk.ac.in',
        'Instructor(s)': 'S QURESHI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'ANALOG/DIGITAL VLSI CIRCUITS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE610A',
        'Department': 'EE',
        'Inst. email': 'qureshi@iitk.ac.in',
        'Instructor(s)': 'S QURESHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'ANALOG/DIGITAL VLSI CIRCUITS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE612',
        'Department': 'EE',
        'Inst. email': 'utpal@iitk.ac.in',
        'Instructor(s)': 'U DAS',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'FIBER OPTIC SYSTEMS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE612A',
        'Department': 'EE',
        'Inst. email': 'utpal@iitk.ac.in',
        'Instructor(s)': 'U DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'FIBER OPTIC SYSTEMS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE614',
        'Department': 'EE',
        'Inst. email': 'chauhan@iitk.ac.in',
        'Instructor(s)': 'Y S CHAUHAN',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'SOLID STATE DEVICES I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE614A',
        'Department': 'EE',
        'Inst. email': 'chauhan@iitk.ac.in',
        'Instructor(s)': 'Y S CHAUHAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'SOLID STATE DEVICES I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE616',
        'Department': 'EE',
        'Inst. email': 'bahniman@iitk.ac.in',
        'Instructor(s)': 'B GHOSH',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'SEMICONDUCTOR DEVICE MODELLING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE616A',
        'Department': 'EE',
        'Inst. email': 'bahniman@iitk.ac.in',
        'Instructor(s)': 'B GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'SEMICONDUCTOR DEVICE MODELLING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE618',
        'Department': 'EE',
        'Inst. email': 'aloke@iitk.ac.in',
        'Instructor(s)': 'A DUTTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'INTEGRATED CIRCUIT FABRICATION TECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE618A',
        'Department': 'EE',
        'Inst. email': 'aloke@iitk.ac.in',
        'Instructor(s)': 'A DUTTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'INTEGRATED CIRCUIT FABRICATION TECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE621',
        'Department': 'EE',
        'Inst. email': 'adrish@iitk.ac.in',
        'Instructor(s)': 'A BANERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'REPRESENTATION AND ANALYSIS OF RANDOM SIGNALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE621A',
        'Department': 'EE',
        'Inst. email': 'adrish@iitk.ac.in',
        'Instructor(s)': 'A BANERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'REPRESENTATION AND ANALYSIS OF RANDOM SIGNALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE624',
        'Department': 'EE',
        'Inst. email': 'rkb@iitk.ac.in',
        'Instructor(s)': 'R K BANSAL',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'INFORMATION AND CODING THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE624A',
        'Department': 'EE',
        'Inst. email': 'rkb@iitk.ac.in',
        'Instructor(s)': 'R K BANSAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'INFORMATION AND CODING THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE630',
        'Department': 'EE',
        'Inst. email': 'scs@iitk.ac.in',
        'Instructor(s)': 'S C SRIVASTAVA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'SIMULATON OF MODERN POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-3-0-5'
    },
    {
        'Course No': 'EE630A',
        'Department': 'EE',
        'Inst. email': 'scs@iitk.ac.in',
        'Instructor(s)': 'S C SRIVASTAVA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'SIMULATON OF MODERN POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-3-0-12'
    },
    {
        'Course No': 'EE632',
        'Department': 'EE',
        'Inst. email': 'snsingh@iitk.ac.in',
        'Instructor(s)': 'S N SINGH',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ECONOMIC OPERATION & CONTROL OF POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE632A',
        'Department': 'EE',
        'Inst. email': 'snsingh@iitk.ac.in',
        'Instructor(s)': 'S N SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ECONOMIC OPERATION & CONTROL OF POWER SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE634',
        'Department': 'EE',
        'Inst. email': 'ngupta@iitk.ac.in',
        'Instructor(s)': 'N GUPTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'ELECTRICAL INSULATION IN POWER APPARATUS AND',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE634A',
        'Department': 'EE',
        'Inst. email': 'ngupta@iitk.ac.in',
        'Instructor(s)': 'N GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'ELECTRICAL INSULATION IN POWER APPARATUS AND',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE641',
        'Department': 'EE',
        'Inst. email': 'abiswas@iitk.ac.in',
        'Instructor(s)': 'A BISWAS',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ADVANCED ENGINEERING ELECTROMAGNETICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE641A',
        'Department': 'EE',
        'Inst. email': 'abiswas@iitk.ac.in',
        'Instructor(s)': 'A BISWAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ADVANCED ENGINEERING ELECTROMAGNETICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE645',
        'Department': 'EE',
        'Inst. email': 'mjakhtar@iitk.ac.in',
        'Instructor(s)': 'M J AKHTAR',
        'Pre-requisites': 'EE340 EE210',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'MONOLITHIC MICROWAVE ICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE645A',
        'Department': 'EE',
        'Inst. email': 'mjakhtar@iitk.ac.in',
        'Instructor(s)': 'M J AKHTAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'MONOLITHIC MICROWAVE ICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE646',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'Y N SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'PHOTONIC NETWORKS & SWITCHING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE646A',
        'Department': 'EE',
        'Inst. email': 'ynsingh@iitk.ac.in',
        'Instructor(s)': 'Y N SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'PHOTONIC NETWORKS & SWITCHING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE647',
        'Department': 'EE',
        'Inst. email': 'kvs@iitk.ac.in',
        'Instructor(s)': 'K V SRIVASTAVA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'MICROWAVE MEASUREMENTS AND DESIGN',
        'Units': '(L-T-P-D-U)         2-0-2-0-4'
    },
    {
        'Course No': 'EE647A',
        'Department': 'EE',
        'Inst. email': 'kvs@iitk.ac.in',
        'Instructor(s)': 'K V SRIVASTAVA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'MICROWAVE MEASUREMENTS AND DESIGN',
        'Units': '(L-T-P-D-U)         2-0-2-0-8'
    },
    {
        'Course No': 'EE650',
        'Department': 'EE',
        'Inst. email': 'pradeepk@iitk.ac.in',
        'Instructor(s)': 'S R SAHOO',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'BASICS OF MODERN CONTROL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE650A',
        'Department': 'EE',
        'Inst. email': 'pradeepk@iitk.ac.in',
        'Instructor(s)': 'S R SAHOO',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'BASICS OF MODERN CONTROL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE653',
        'Department': 'EE',
        'Inst. email': 'lbehera@iitk.ac.in',
        'Instructor(s)': 'L BEHERA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'DIGITAL CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE653A',
        'Department': 'EE',
        'Inst. email': 'lbehera@iitk.ac.in',
        'Instructor(s)': 'L BEHERA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'DIGITAL CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE654',
        'Department': 'EE',
        'Inst. email': 'potluri@iitk.ac.in',
        'Instructor(s)': 'R POTLURI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ROBUST CONTROL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE654A',
        'Department': 'EE',
        'Inst. email': 'potluri@iitk.ac.in',
        'Instructor(s)': 'R POTLURI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ROBUST CONTROL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE659',
        'Department': 'EE',
        'Inst. email': 'nnaik@iitk.ac.in',
        'Instructor(s)': 'N NAIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'COMPUTATIONAL ASPECTS OF TOMOGRAPHIC IMAGING :',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE659A',
        'Department': 'EE',
        'Inst. email': 'nnaik@iitk.ac.in',
        'Instructor(s)': 'N NAIK',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'COMPUTATIONAL ASPECTS OF TOMOGRAPHIC IMAGING :',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE660',
        'Department': 'EE',
        'Inst. email': 'sensarma@iitk.ac.in',
        'Instructor(s)': 'P SENSARMA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'BASICS OF POWER ELECTRONIC CONVERTERS',
        'Units': '(L-T-P-D-U)         3-0-3-0-5'
    },
    {
        'Course No': 'EE660A',
        'Department': 'EE',
        'Inst. email': 'sensarma@iitk.ac.in',
        'Instructor(s)': 'P SENSARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'BASICS OF POWER ELECTRONIC CONVERTERS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE664',
        'Department': 'EE',
        'Inst. email': 'ajoshi@iitk.ac.in',
        'Instructor(s)': 'A JOSHI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'FUNDAMENTALS OF ELECTRIC DRIVES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE664A',
        'Department': 'EE',
        'Inst. email': 'ajoshi@iitk.ac.in',
        'Instructor(s)': 'A JOSHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'FUNDAMENTALS OF ELECTRIC DRIVES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE670',
        'Department': 'EE',
        'Inst. email': 'adityaj@iitk.ac.in',
        'Instructor(s)': 'A JAGANNATHAM',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'WIRELESS COMMUNICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE670A',
        'Department': 'EE',
        'Inst. email': 'adityaj@iitk.ac.in',
        'Instructor(s)': 'A JAGANNATHAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;',
        'Title': 'WIRELESS COMMUNICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE673',
        'Department': 'EE',
        'Inst. email': 'ketan@iitk.ac.in',
        'Instructor(s)': 'K RAJAWAT',
        'Pre-requisites': '#',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'DIGITAL COMMUNICATION NETWORKS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE673A',
        'Department': 'EE',
        'Inst. email': 'ketan@iitk.ac.in',
        'Instructor(s)': 'K RAJAWAT',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'DIGITAL COMMUNICATION NETWORKS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE674',
        'Department': 'EE',
        'Inst. email': 'spdas@iitk.ac.in',
        'Instructor(s)': 'S P DAS',
        'Pre-requisites': 'EE370',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'ARCHITECTURE OF MICRO-PROCESSORS &',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE674A',
        'Department': 'EE',
        'Inst. email': 'spdas@iitk.ac.in',
        'Instructor(s)': 'S P DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'ARCHITECTURE OF MICRO-PROCESSORS &',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE698',
        'Department': 'EE',
        'Inst. email': 'santanum@iitk.ac.in',
        'Instructor(s)': 'S K MISHRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'POWER MANAGEMENT CIRCUITS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE698A',
        'Department': 'EE',
        'Inst. email': 'santanum@iitk.ac.in',
        'Instructor(s)': 'S K MISHRA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'POWER MANAGEMENT CIRCUITS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE698D',
        'Department': 'EE',
        'Inst. email': 'asandeep@iitk.ac.in',
        'Instructor(s)': 'S ANAND',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'POWER ELECTRONICS IN SOLAR PHOTOVOLTAIC SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE698F',
        'Department': 'EE',
        'Inst. email': 'asandeep@iitk.ac.in',
        'Instructor(s)': 'S ANAND',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'POWER ELECTRONICS IN SOLAR PHOTOVOLTAIC SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE698R',
        'Department': 'EE',
        'Inst. email': 'adityaj@iitk.ac.in',
        'Instructor(s)': 'A JAGANNATHAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TRANSCEIVER OPTIMIZATION FOR OFDM WIRELESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE698Z',
        'Department': 'EE',
        'Inst. email': 'adityaj@iitk.ac.in',
        'Instructor(s)': 'A JAGANNATHAM',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TRANSCEIVER OPTIMIZATION FOR OFDM WIRELESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE699',
        'Department': 'EE',
        'Inst. email': 'pradeepk@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'EE705',
        'Department': 'EE',
        'Inst. email': 'lbehera@iitk.ac.in',
        'Instructor(s)': 'L BEHERA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'INTELLIGENT SYSTEMS & CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EE705A',
        'Department': 'EE',
        'Inst. email': 'lbehera@iitk.ac.in',
        'Instructor(s)': 'L BEHERA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'INTELLIGENT SYSTEMS & CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EE799',
        'Department': 'EE',
        'Inst. email': 'pradeepk@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'EEM602',
        'Department': 'CE',
        'Inst. email': 'abhas@iitk.ac.in',
        'Instructor(s)': 'ABHAS SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'PHYSICOCHEMICAL PRINCIPLES AND PROCESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EEM602A',
        'Department': 'CE',
        'Inst. email': 'abhas@iitk.ac.in',
        'Instructor(s)': 'ABHAS SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'PHYSICOCHEMICAL PRINCIPLES AND PROCESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EEM603',
        'Department': 'CE',
        'Inst. email': 'vinod@iitk.ac.in',
        'Instructor(s)': 'VINOD TARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: W 17:00-18:30 REQ;F 17:00-18:00 REQ;',
        'Title': 'ECOLOGICAL AND BIOLOGICAL PRINCIPLES AND PROCESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EEM603A',
        'Department': 'CE',
        'Inst. email': 'vinod@iitk.ac.in',
        'Instructor(s)': 'VINOD TARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ECOLOGICAL AND BIOLOGICAL PRINCIPLES AND PROCESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EEM606',
        'Department': 'CE',
        'Inst. email': 'tarun@iitk.ac.in',
        'Instructor(s)': 'TARUN GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'AIR POLLUTION AND ITS CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'EEM606A',
        'Department': 'CE',
        'Inst. email': 'tarun@iitk.ac.in',
        'Instructor(s)': 'TARUN GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'AIR POLLUTION AND ITS CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'EEM699',
        'Department': 'EEM',
        'Inst. email': 'anubha@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M.TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ENG445',
        'Department': 'HSS',
        'Inst. email': 'trc@iitk.ac.in',
        'Instructor(s)': 'T RAVICHANDRAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'LITERATURE & THE INDIVIDUAL',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'ENG445A',
        'Department': 'HSS',
        'Inst. email': 'trc@iitk.ac.in',
        'Instructor(s)': 'T RAVICHANDRAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'LITERATURE & THE INDIVIDUAL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ENG448',
        'Department': 'HSS',
        'Inst. email': 'chai@iitk.ac.in',
        'Instructor(s)': 'C PUTTASWAMY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'LANGAUGES OF SOUTH ASIA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ENG448A',
        'Department': 'HSS',
        'Inst. email': 'chai@iitk.ac.in',
        'Instructor(s)': 'C PUTTASWAMY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWF 12:00-13:00 REQ;',
        'Title': 'LANGAUGES OF SOUTH ASIA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ENG799',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ES699',
        'Department': 'ES',
        'Inst. email': 'rsinha@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ES799',
        'Department': 'ES',
        'Inst. email': 'rsinha@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PH D THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ESC101A',
        'Department': 'CSE',
        'Inst. email': 'karkare@iitk.ac.in',
        'Instructor(s)': 'AMEY KARKARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 L7;T/D: T 12:00-13:00 REQ;',
        'Title': 'FUNDAMENTAL OF COMPUTING',
        'Units': '(L-T-P-D-U)         3-1-3-0-14'
    },
    {
        'Course No': 'ESC102N',
        'Department': 'EE',
        'Inst. email': 'rhegde@iitk.ac.in',
        'Instructor(s)': 'RAJESH HEGDE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'INTRODUCTION TO ELECTRONICS',
        'Units': '(L-T-P-D-U)         3-1-3-0-5'
    },
    {
        'Course No': 'ESC201A',
        'Department': 'EE',
        'Inst. email': 'rhegde@iitk.ac.in',
        'Instructor(s)': 'RAJESH HEGDE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'INTRODUCTION TO ELECTRONICS',
        'Units': '(L-T-P-D-U)         3-1-3-0-14'
    },
    {
        'Course No': 'ESO201A',
        'Department': 'CHE',
        'Inst. email': 'msk@iitk.ac.in',
        'Instructor(s)': 'M S KALRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L16;T/D: Th 10:00-11:00',
        'Title': 'THERMODYNAMICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'ESO202',
        'Department': 'CHE',
        'Inst. email': 'msk@iitk.ac.in',
        'Instructor(s)': 'M S KALRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L16;T/D: Th 10:00-11:00',
        'Title': 'THERMODYNAMICS',
        'Units': '(L-T-P-D-U)         3-1-0-1-4'
    },
    {
        'Course No': 'ESO202A',
        'Department': 'CE',
        'Inst. email': 'kamle@iitk.ac.in',
        'Instructor(s)': 'S KAMLE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L17;T/D: Th 10:00-11:00',
        'Title': 'MECHANICS OF SOLIDS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'ESO203A',
        'Department': 'EE',
        'Inst. email': 'nishchal@iitk.ac.in',
        'Instructor(s)': 'NISHCHAL VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L1;T/D: Th 10:00-11:00 REQ;',
        'Title': 'INTRODUCTION TO ELECTRICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-1-2-0-13'
    },
    {
        'Course No': 'ESO204',
        'Department': 'CE',
        'Inst. email': 'kamle@iitk.ac.in',
        'Instructor(s)': 'S KAMLE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L17;T/D: Th 10:00-11:00',
        'Title': 'MECHANICS OF SOLIDS',
        'Units': '(L-T-P-D-U)         3-1-0-1-4'
    },
    {
        'Course No': 'ESO204A',
        'Department': 'AE',
        'Inst. email': 'spanda@iitk.ac.in',
        'Instructor(s)': 'S PANDA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L16;T/D: Th 11:00-12:00',
        'Title': 'FLUID MECHANICS AND RATE PROCESSES',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'ESO205A',
        'Department': 'MSE',
        'Inst. email': 'tmaiti@iitk.ac.in',
        'Instructor(s)': 'T MAITI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L2;T/D: Th 11:00-12:00 REQ;',
        'Title': 'NATURE AND PROPERTIES OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-1-3-0-14'
    },
    {
        'Course No': 'ESO206A',
        'Department': 'BSBE',
        'Inst. email': 'akthakur@iitk.ac.in',
        'Instructor(s)': 'ASHWINI K. THAKUR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 09:00-10:00 L1;',
        'Title': 'PRINCIPLES OF BIOTECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ESO207A',
        'Department': 'CSE',
        'Inst. email': 'sganguly@iitk.ac.in',
        'Instructor(s)': 'SUMIT GANGULY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L2;',
        'Title': 'DATA STRUCTURE & ALGORITHM',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ESO208A',
        'Department': 'CE',
        'Inst. email': 'snt@iitk.ac.in',
        'Instructor(s)': 'S N TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L17;T/D: Th 11:00-12:00',
        'Title': 'COMPUTATIONAL METHODS IN ENGINEERING',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'ESO209A',
        'Department': 'ME',
        'Inst. email': 'anindya@iitk.ac.in',
        'Instructor(s)': 'ANINDYA CHATTERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MW 17:00-18:00 L2;T/D: T 17:00-18:00 REQ;',
        'Title': 'DYNAMICS',
        'Units': '(L-T-P-D-U)         2-1-0-0-8'
    },
    {
        'Course No': 'ESO210',
        'Department': 'EE',
        'Inst. email': 'nishchal@iitk.ac.in',
        'Instructor(s)': 'NISHCHAL VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L1;T/D: Th 10:00-11:00 REQ;',
        'Title': 'INTRODUCTION TO ELECTRICAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-1-2-0-5'
    },
    {
        'Course No': 'ESO211',
        'Department': 'CSE',
        'Inst. email': 'sganguly@iitk.ac.in',
        'Instructor(s)': 'SUMIT GANGULY',
        'Pre-requisites': 'ESC101N',
        'Schedule': 'LEC: MWF 10:00-11:00 L2;',
        'Title': 'DATA STRUCTURES AND ALGORITHMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ESO212',
        'Department': 'AE',
        'Inst. email': 'spanda@iitk.ac.in',
        'Instructor(s)': 'S PANDA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L16;T/D: Th 11:00-12:00',
        'Title': 'FLUID MECHANICS AND RATE PROCESSES',
        'Units': '(L-T-P-D-U)         3-1-0-1-4'
    },
    {
        'Course No': 'ESO214',
        'Department': 'MME',
        'Inst. email': 'tmaiti@iitk.ac.in',
        'Instructor(s)': 'T MAITI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L2;T/D: Th 11:00-12:00 REQ;',
        'Title': 'NATURE AND PROPERTIES OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-1-3-1-5'
    },
    {
        'Course No': 'ESO218',
        'Department': 'CE',
        'Inst. email': 'snt@iitk.ac.in',
        'Instructor(s)': 'S N TRIPATHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L17;T/D: Th 11:00-12:00',
        'Title': 'COMPUTATIONAL METHODS IN ENGINEERING',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'HSS403',
        'Department': 'HSS',
        'Inst. email': 'shikha@iitk.ac.in',
        'Instructor(s)': 'SHIKHA DIXIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'SOCIAL AND BEHAVIOURAL ASPECTS OF HEALTH',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'HSS403A',
        'Department': 'HSS',
        'Inst. email': 'shikha@iitk.ac.in',
        'Instructor(s)': 'SHIKHA DIXIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'SOCIAL AND BEHAVIOURAL ASPECTS OF HEALTH',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'IME602',
        'Department': 'IME',
        'Inst. email': 'raghus@iitk.ac.in',
        'Instructor(s)': 'R N SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'PROBABILITY AND STATISTICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME603',
        'Department': 'IME',
        'Inst. email': 'dphilip@iitk.ac.in',
        'Instructor(s)': 'D PHILIP',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:30-17:00 REQ;T 14:00-15:30 REQ;',
        'Title': 'INTRODUCTION TO COMPUTING',
        'Units': '(L-T-P-D-U)         2-0-3-0-4'
    },
    {
        'Course No': 'IME605',
        'Department': 'IME',
        'Inst. email': 'vanamala@iitk.ac.in',
        'Instructor(s)': 'SRI VANAMALLA V',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'OPERATIONS RESEARCH FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME611',
        'Department': 'IME',
        'Inst. email': 'ks@iitk.ac.in',
        'Instructor(s)': 'KRIPA SHANKER',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 17:00-18:30 REQ;',
        'Title': 'FINANCIAL ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME636',
        'Department': 'IME',
        'Inst. email': 'vanamala@iitk.ac.in',
        'Instructor(s)': 'S VANAMALLA V',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'INTRODUCTION TO GAME THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME636A',
        'Department': 'IME',
        'Inst. email': 'vanamala@iitk.ac.in',
        'Instructor(s)': 'S VANAMALLA V',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'INTRODUCTION TO GAME THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'IME641',
        'Department': 'IME',
        'Inst. email': 'ks@iitk.ac.in',
        'Instructor(s)': 'KRIPA SHANKER',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 17:00-18:30 REQ;',
        'Title': 'DESIGN OF PRODUCTION SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME692',
        'Department': 'IME',
        'Inst. email': 'nksharma@iitk.ac.in',
        'Instructor(s)': 'N K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'ADVANCED STATISTICAL METHODS FOR BUSINESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'IME692A',
        'Department': 'IME',
        'Inst. email': 'nksharma@iitk.ac.in',
        'Instructor(s)': 'N K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'ADVANCED STATISTICAL METHODS FOR BUSINESS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'IME698',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'IME699',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'IME799',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'LIF101A',
        'Department': 'BSBE',
        'Inst. email': 'abandopa@iitk.ac.in',
        'Instructor(s)': 'A BANDYOPADHYAYA, B PRAKASH',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 14:00-15:00 L7;',
        'Title': 'INTRODUCTION TO BIOLOGY',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'LT699',
        'Department': 'LT',
        'Inst. email': 'hwanare@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MBA601',
        'Department': 'IME',
        'Inst. email': 'asinha@iitk.ac.in',
        'Instructor(s)': 'A P SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 C5;',
        'Title': 'ACCOUNTING FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA601A',
        'Department': 'IME',
        'Inst. email': 'asinha@iitk.ac.in',
        'Instructor(s)': 'A P SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 C5;',
        'Title': 'ACCOUNTING FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA606',
        'Department': 'IME',
        'Inst. email': 'devlina@iitk.ac.in',
        'Instructor(s)': 'DEVLINA CHATTERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 C5;',
        'Title': 'ECONOMIC ANALYSIS FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA606A',
        'Department': 'IME',
        'Inst. email': 'devlina@iitk.ac.in',
        'Instructor(s)': 'DEVLINA CHATTERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 C5;',
        'Title': 'ECONOMIC ANALYSIS FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA611',
        'Department': 'IME',
        'Inst. email': 'rahulv@iitk.ac.in',
        'Instructor(s)': 'RAHUL VARMAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'ORGANIZATION STRUCTURE AND BEHAVIOUR',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA611A',
        'Department': 'IME',
        'Inst. email': 'rahulv@iitk.ac.in',
        'Instructor(s)': 'RAHUL VARMAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'ORGANIZATION STRUCTURE AND BEHAVIOUR',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA622',
        'Department': 'IME',
        'Inst. email': 'rrks@iitk.ac.in',
        'Instructor(s)': 'R R K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MANUFACTURING STRATEGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA622A',
        'Department': 'IME',
        'Inst. email': 'rrks@iitk.ac.in',
        'Instructor(s)': 'R R K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MANUFACTURING STRATEGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA623',
        'Department': 'IME',
        'Inst. email': 'asinha@iitk.ac.in',
        'Instructor(s)': 'A P SINHA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'STRATEGIC MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA623A',
        'Department': 'IME',
        'Inst. email': 'asinha@iitk.ac.in',
        'Instructor(s)': 'A P SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'STRATEGIC MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA631',
        'Department': 'IME',
        'Inst. email': 'ssmishra@iitk.ac.in',
        'Instructor(s)': 'S S MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'MARKETING MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA631A',
        'Department': 'IME',
        'Inst. email': 'ssmishra@iitk.ac.in',
        'Instructor(s)': 'S S MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'MARKETING MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA637',
        'Department': 'IME',
        'Inst. email': 'ssmishra@iitk.ac.in',
        'Instructor(s)': 'S S MISHRA',
        'Pre-requisites': 'MBA631',
        'Schedule': 'LEC: T 12:00-13:30 REQ;F 14:00-15:30 REQ;',
        'Title': 'BUSINESS TO BUSINESS MARKETING',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'MBA639',
        'Department': 'IME',
        'Inst. email': 'jayanta@iitk.ac.in',
        'Instructor(s)': 'JAYANTA CHATTERJEE, S S MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: W 17:00-18:30 REQ;F 15:30-17:00 REQ;',
        'Title': 'STRATEGIC MARKETING-CONTEMPORARY ISSUES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA639A',
        'Department': 'IME',
        'Inst. email': 'jayanta@iitk.ac.in',
        'Instructor(s)': 'JAYANTA CHATTERJEE, S S MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: W 17:00-18:30 REQ;F 15:30-17:00 REQ;',
        'Title': 'STRATEGIC MARKETING-CONTEMPORARY ISSUES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA641',
        'Department': 'IME',
        'Inst. email': 'subhasm@iitk.ac.in',
        'Instructor(s)': 'S C MISRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'COMPUTING FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA641A',
        'Department': 'IME',
        'Inst. email': 'subhams@iitk.ac,.in',
        'Instructor(s)': 'S C MISHRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'COMPUTING FOR MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA646',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'VEENA BANSAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:30-12:00 REQ;W 15:30-17:00 REQ;',
        'Title': 'ENTERPRISE INTEGRATION WITH IT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA646A',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'VEENA BANSAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:30-12:00 REQ;W 15:30-17:00 REQ;',
        'Title': 'ENTERPRISE INTEGRATION WITH IT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA651',
        'Department': 'IME',
        'Inst. email': 'raghus@iitk.ac.in',
        'Instructor(s)': 'R N SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'QUANTITATIVE METHODS FOR DECISION MAKING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA654',
        'Department': 'IME',
        'Inst. email': 'udays@iitk.ac.in',
        'Instructor(s)': 'UDAY S RACHERLA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 17:00-18:30 REQ;',
        'Title': 'INNOVATION FOR SUSTAINABLE BUSINESS ADVANTAGE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA654A',
        'Department': 'IME',
        'Inst. email': 'udays@iitk.ac.in',
        'Instructor(s)': 'UDAY S RACHERLA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 17:00-18:30 REQ;',
        'Title': 'INNOVATION FOR SUSTAINABLE BUSINESS ADVANTAGE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA664',
        'Department': 'IME',
        'Inst. email': 'rrks@iitk.ac.in',
        'Instructor(s)': 'R R K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 C5;',
        'Title': 'SUPPLY CHAIN MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA664A',
        'Department': 'IME',
        'Inst. email': 'rrks@iitk.ac.in',
        'Instructor(s)': 'R R K SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 C5;',
        'Title': 'SUPPLY CHAIN MANAGEMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MBA675',
        'Department': 'IME',
        'Inst. email': 'anoops@iitk.ac.in',
        'Instructor(s)': 'ANOOP SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'INFRASTRUCTURE REGULATION, POLICY & FINANCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA676',
        'Department': 'IME',
        'Inst. email': 'ppuneet@iitk.ac.in',
        'Instructor(s)': 'PUNEET PRAKASH',
        'Pre-requisites': 'MBA601& MBA607',
        'Schedule': 'LEC: T 09:00-10:30 REQ;W 14:00-15:30 REQ;',
        'Title': 'SECURITY ANALYSIS, DERIVATIVES & PORTFOLIO',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA679',
        'Department': 'IME',
        'Inst. email': 'bvphani@iitk.ac.in',
        'Instructor(s)': 'B V PHANI',
        'Pre-requisites': 'MBA601 & MBA607',
        'Schedule': 'LEC: M 15:30-17:00 C3;T 14:00-15:30 C3;',
        'Title': 'COMMERCIAL BANKING, RISK MODELING AND RISK',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MBA698',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'MANAGEMENT SEMINARS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MBA699',
        'Department': 'IME',
        'Inst. email': 'veena@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'ME251A',
        'Department': 'ME',
        'Inst. email': 'ntewari@iitk.ac.in',
        'Instructor(s)': 'NACHIKETA TEWARI',
        'Pre-requisites': 'TA101A',
        'Schedule': 'LEC: W 12:00-13:00 REQ;',
        'Title': 'ENGINEERING DESIGN AND GRAPHICS',
        'Units': '(L-T-P-D-U)         1-0-2-0-5'
    },
    {
        'Course No': 'ME301A',
        'Department': 'ME',
        'Inst. email': 'mkdas@iitk.ac.in',
        'Instructor(s)': 'M K DAS',
        'Pre-requisites': 'ESO201A',
        'Schedule': 'LEC: WF 11:00-12:00 REQ;',
        'Title': 'ENERGY SYSTEMS I',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'ME321A',
        'Department': 'ME',
        'Inst. email': 'bls@iitk.ac.in',
        'Instructor(s)': 'BASANT LAL SHARMA',
        'Pre-requisites': 'ESO202A',
        'Schedule': 'LEC: MTh 11:00-12:00 REQ;',
        'Title': 'ADVANCE MECHANICS OF SOLIDS',
        'Units': '(L-T-P-D-U)         2-0-1-0-7'
    },
    {
        'Course No': 'ME352A',
        'Department': 'ME',
        'Inst. email': 'bdasgupta@iitk.ac.in',
        'Instructor(s)': 'BHASKAR DAS GUPTA',
        'Pre-requisites': 'ESO209A',
        'Schedule': 'LEC: MTh 12:00-13:00 REQ;',
        'Title': 'THEORY OF MECHANISMS & MACHINES',
        'Units': '(L-T-P-D-U)         2-0-1-0-7'
    },
    {
        'Course No': 'ME359',
        'Department': 'ME',
        'Inst. email': 'samkhan@iitk.ac.in',
        'Instructor(s)': 'SAMEER KHANDEKHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'INTERNAL COMBUSTION ENGINES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME359A',
        'Department': 'ME',
        'Inst. email': 'samkhan@iitk.ac.in',
        'Instructor(s)': 'SAMEER KHANDEKHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'INTERNAL COMBUSTION ENGINES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME361A',
        'Department': 'ME',
        'Inst. email': 'arvindkr@iitk.ac.in',
        'Instructor(s)': 'ARVIND KUMAR, NIRAJ SINHA',
        'Pre-requisites': 'TA201A,TA202A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'MANUFACTURING SCIENCE & TECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-1-0-10'
    },
    {
        'Course No': 'ME399A',
        'Department': 'ME',
        'Inst. email': 'samkhan@iitk.ac.in',
        'Instructor(s)': 'S KHENDAKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'MECHANICAL ENGINEERING COMMUNICATION SKILLS',
        'Units': '(L-T-P-D-U)         0-0-0-2-2'
    },
    {
        'Course No': 'ME401',
        'Department': 'ME',
        'Inst. email': 'aksaha@iitk.ac.in',
        'Instructor(s)': 'A K SAHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'ENERGY SYSTEMS - II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME401A',
        'Department': 'ME',
        'Inst. email': 'aksaha@iitk.ac.in',
        'Instructor(s)': 'A K SAHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'ENERGY SYSTEMS-II',
        'Units': '(L-T-P-D-U)         3-0-1-0-10'
    },
    {
        'Course No': 'ME451',
        'Department': 'ME',
        'Inst. email': 'sovandas@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT - I',
        'Units': '(L-T-P-D-U)         0-0-6-0-4'
    },
    {
        'Course No': 'ME451A',
        'Department': 'ME',
        'Inst. email': 'sovandas@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'ME PROJECT-1',
        'Units': '(L-T-P-D-U)         0-0-0-0-9'
    },
    {
        'Course No': 'ME621',
        'Department': 'ME',
        'Inst. email': 'ag@iitk.ac.in',
        'Instructor(s)': 'ANURAJ GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'INTRODUCTION TO SOLID MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME621A',
        'Department': 'ME',
        'Inst. email': 'ag@iitk.ac.in',
        'Instructor(s)': 'ANURAG GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'INTRODUCTION TO SOLID MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME623',
        'Department': 'ME',
        'Inst. email': 'venkit@iitk.ac.in',
        'Instructor(s)': 'P VENKITANARAYANAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'FINITE ELEMENT METHODS IN ENGINEERING MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME623A',
        'Department': 'ME',
        'Inst. email': 'venkit@iitk.ac.in',
        'Instructor(s)': 'P VENKITANARAYANAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'FINITE ELEMENT METHODS IN ENGINEERING MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME625',
        'Department': 'ME',
        'Inst. email': 'hhatwal@iitk.ac.in',
        'Instructor(s)': 'H HATWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'APPLIED DYNAMICS AND VIBRATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME625A',
        'Department': 'ME',
        'Inst. email': 'hhatwal@iitk.ac.in',
        'Instructor(s)': 'H HATWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'APPLIED DYNAMICS AND VIBRATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME630',
        'Department': 'ME',
        'Inst. email': 'subra@iitk.ac.in',
        'Instructor(s)': 'SUBRATA SARKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'NUMERICAL FLUID FLOW AND HEAT TRANSFER',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME630A',
        'Department': 'ME',
        'Inst. email': 'subra@iitk.ac.in',
        'Instructor(s)': 'SUBRATA SARKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'NUMERICAL FLUID FLOW AND HEAT TRANSFER',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME631',
        'Department': 'ME',
        'Inst. email': 'kmurli@iitk.ac.in',
        'Instructor(s)': 'K MURALIDHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'VISCOUS FLOW THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME631A',
        'Department': 'ME',
        'Inst. email': 'kmurli@iitk.ac.in',
        'Instructor(s)': 'K MURLIDHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'VISCOUS FLOW THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME641',
        'Department': 'ME',
        'Inst. email': 'psg@iitk.ac.in',
        'Instructor(s)': 'P S GHOSHDASTIDAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'CONDUCTION AND RADIATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME641A',
        'Department': 'ME',
        'Inst. email': 'psg@iitk.ac.in',
        'Instructor(s)': 'P S GHOSHDASTIDAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'CONDUCTION AND RADIATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME658',
        'Department': 'ME',
        'Inst. email': '',
        'Instructor(s)': '',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'NUMERICAL CONTROL OF MACHINE TOOLS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME661',
        'Department': 'ME',
        'Inst. email': 'choudhry@iitk.ac.in',
        'Instructor(s)': 'S K CHOUDHARY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'MACHINING SCIENCE I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME661A',
        'Department': 'ME',
        'Inst. email': 'choudhry@iitk.ac.in',
        'Instructor(s)': 'S K CHOUDHARY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'MACHINING SCIENCE I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME662',
        'Department': 'ME',
        'Inst. email': 'bhattacs@iitk.ac.in',
        'Instructor(s)': 'SHANTANU BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'MACHINING SCIENCE II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME662A',
        'Department': 'ME',
        'Inst. email': 'bhattacs@iitk.ac.in',
        'Instructor(s)': 'SHANTANU BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'MACHINING SCIENCE II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME667',
        'Department': 'ME',
        'Inst. email': 'sujeet@iitk.ac.in',
        'Instructor(s)': 'SUJEET K SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'ADHESION, FRICTION AND LUBRICATION FOR',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME667A',
        'Department': 'ME',
        'Inst. email': 'sujeet@iitk.ac.in',
        'Instructor(s)': 'SUJEET K SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'ADHESION, FRICTION AND LUBRICATION FOR',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME681',
        'Department': 'ME',
        'Inst. email': 'pmd@iitk.ac.in',
        'Instructor(s)': 'P M DIXIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME681A',
        'Department': 'ME',
        'Inst. email': 'pmd@iitk.ac.in',
        'Instructor(s)': 'P M DIXIT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'MATHEMATICAL METHODS IN ENGINEERING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME685',
        'Department': 'ME',
        'Inst. email': 'nnk@iitk.ac.in',
        'Instructor(s)': 'N N KISHOR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'PROGRAMMING AND NUMERICAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME685A',
        'Department': 'ME',
        'Inst. email': 'nnk@iitk.ac.in',
        'Instructor(s)': 'N N KISHOR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'PROGRAMMING AND NUMERICAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME690',
        'Department': 'ME',
        'Inst. email': 'akag@iitk.ac.in',
        'Instructor(s)': 'AVINASH KUMAR AGARWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'ALTERNATIVE FUELS & ADVANCE IN IC ENGINES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME690A',
        'Department': 'ME',
        'Inst. email': 'akag@iitk.ac.in',
        'Instructor(s)': 'AVINASH KUMAR AGARWAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'ALTERNATIVE FUELS & ADVANCE IN IC ENGINES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME698M',
        'Department': 'ME',
        'Inst. email': 'sbasu@iitk.ac.in',
        'Instructor(s)': 'SUMIT BASU',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'NON - LINEAR FINITE ELEMENT TECHNIQUES IN SOLID',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME698N',
        'Department': 'ME',
        'Inst. email': 'sbasu@iitk.ac.in',
        'Instructor(s)': 'SUMIT BASU',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'NON - LINEAR FINITE ELEMENT TECHNIQUES IN SOLID',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME699',
        'Department': 'ME',
        'Inst. email': 'sbasu@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'ME723',
        'Department': 'ME',
        'Inst. email': 'ssgupta@iitk.ac.in',
        'Instructor(s)': 'SHAKTI S GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'WAVE PROPAGATION IN SOLIDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME723A',
        'Department': 'ME',
        'Inst. email': 'ssgupta@iitk.ac.in',
        'Instructor(s)': 'SHAKTI S GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'WAVE PROPAGATION IN SOLIDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME724',
        'Department': 'ME',
        'Inst. email': 'sovandas@iitk.ac.in',
        'Instructor(s)': 'SOVAN LAL DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:30 REQ;',
        'Title': 'MECHANICS OF BIOLOGICAL MEMBRANES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME724A',
        'Department': 'ME',
        'Inst. email': 'sovandas@iitk.ac.in',
        'Instructor(s)': 'SOVAN LAL DAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:30 REQ;',
        'Title': 'MECHANICS OF BIOLOGICAL MEMBRANES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME725',
        'Department': 'ME',
        'Inst. email': 'ishans@iitk.ac.in',
        'Instructor(s)': 'ISHAN SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MICRO-MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME725A',
        'Department': 'ME',
        'Inst. email': 'ishans@iitk.ac.in',
        'Instructor(s)': 'ISHAN SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MICROMECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME761',
        'Department': 'ME',
        'Inst. email': 'jrkumar@iitk.ac.in',
        'Instructor(s)': 'J RAM KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'COMPUTER AIDED MANUFACTURING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME761A',
        'Department': 'ME',
        'Inst. email': 'jrkumar@iitk.ac.in',
        'Instructor(s)': 'J RAMKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'COMPUTER AIDED MANUFACTURING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME763',
        'Department': 'ME',
        'Inst. email': 'adutta@iitk.ac.in',
        'Instructor(s)': 'ASHISH DUTTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ROBOT MANIPULATORS: DYNAMICS AND CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME763A',
        'Department': 'ME',
        'Inst. email': 'adutta@iitk.ac.in',
        'Instructor(s)': 'ASHISH DUTTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ROBOT MANIPULATORS: DYNAMICS AND CONTROL',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME771',
        'Department': 'ME',
        'Inst. email': 'bishakh@iitk.ac.in',
        'Instructor(s)': 'BISHAKH BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SMART MATERIALS AND STRUCTURE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'ME771A',
        'Department': 'ME',
        'Inst. email': 'bishakh@iitk.ac.in',
        'Instructor(s)': 'BISHAKH BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SMART MATERIALS AND STRUCTURE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'ME799',
        'Department': 'ME',
        'Inst. email': 'sbasu@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MS601',
        'Department': 'MS',
        'Inst. email': 'jk@iitk.ac.in',
        'Instructor(s)': 'JITENDRA KUMAR, RAJ PALA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 ACMS110;',
        'Title': 'STRUCTURAL & MAGNETIC PROPERTIES OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MS603',
        'Department': 'MS',
        'Inst. email': 'kamalkk@iitk.ac.in',
        'Instructor(s)': 'K K KAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 ACMS110;',
        'Title': 'MECHANICAL PROPERTIES OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-1-5'
    },
    {
        'Course No': 'MS604',
        'Department': 'MS',
        'Inst. email': 'kamalkk@iitk.ac.in',
        'Instructor(s)': 'K K KAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 ACMS110;',
        'Title': 'CHARACTERIZATION OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-1-0-5'
    },
    {
        'Course No': 'MS617',
        'Department': 'MS',
        'Inst. email': 'srisiva@iitk.ac.in',
        'Instructor(s)': 'S. SIVAKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 ACMS110;',
        'Title': 'INTRODUCTION TO NANOMATERIALS AND NANOTECHNOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MS698',
        'Department': 'MS',
        'Inst. email': 'kamalkk@iitk.ac.in',
        'Instructor(s)': 'K K KAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: Th 16:00-17:00 ACMS110;',
        'Title': 'GRADUATE SEMINAR',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MS699',
        'Department': 'MS',
        'Inst. email': 'jrkumar@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MS799',
        'Department': 'MS',
        'Inst. email': 'jrkumar@iitk.ac.in',
        'Instructor(s)': 'CONVENER DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MSE201A',
        'Department': 'MSE',
        'Inst. email': 'kkaustub@iitk.ac.in',
        'Instructor(s)': 'KAUSTUBH KULKARNI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;T/D: Th 12:00-13:00',
        'Title': 'THERMODYNAMICS & PHASE EQUILIBRIA',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MSE300A',
        'Department': 'MSE',
        'Inst. email': 'kbalani@iitk.ac.in',
        'Instructor(s)': 'K BALANI',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROFESSIONAL & TECHNICAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-0-2-2'
    },
    {
        'Course No': 'MSE301A',
        'Department': 'MSE',
        'Inst. email': 'kbiswas@iitk.ac.in',
        'Instructor(s)': 'K BISWAS, I MANNA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 17:00-18:00 REQ;',
        'Title': 'PHASE TRANSFORMATIONS',
        'Units': '(L-T-P-D-U)         2-0-0-0-6'
    },
    {
        'Course No': 'MSE302A',
        'Department': 'MSE',
        'Inst. email': 'npgurao@iitk.ac.in',
        'Instructor(s)': 'N P GURAO',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'MECHANICAL BEHAVIOUR OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE303A',
        'Department': 'MSE',
        'Inst. email': 'agaur@iitk.ac.in',
        'Instructor(s)': 'ANSHU GAUR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'ELECTRONIC & MAGNETIC PROPERTIES OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE311A',
        'Department': 'MSE',
        'Inst. email': 'vverma@iitk.ac.in',
        'Instructor(s)': 'VIVEK VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHYSICAL METALLURGY LABORATORY',
        'Units': '(L-T-P-D-U)         0-0-3-0-3'
    },
    {
        'Course No': 'MSE313A',
        'Department': 'MSE',
        'Inst. email': 'npgurao@iitk.ac.in',
        'Instructor(s)': 'N P GURAO',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'MECHANICAL BEHAVIOUR LABORATORY',
        'Units': '(L-T-P-D-U)         0-0-3-0-3'
    },
    {
        'Course No': 'MSE349A',
        'Department': 'MSE',
        'Inst. email': 'shashank@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UNDER GRADUATE PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-2-0-4'
    },
    {
        'Course No': 'MSE497A',
        'Department': 'MSE',
        'Inst. email': 'shashank@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UNDER GRADUATE PROJECT III',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE498',
        'Department': 'MSE',
        'Inst. email': 'shashank@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-4-0-2'
    },
    {
        'Course No': 'MSE499',
        'Department': 'MSE',
        'Inst. email': 'shashank@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': 'MME498/MSE498',
        'Schedule': 'LEC:',
        'Title': 'PROJECT II',
        'Units': '(L-T-P-D-U)         0-0-10-0-5'
    },
    {
        'Course No': 'MSE613',
        'Department': 'MSE',
        'Inst. email': 'vidtan@iitk.ac.in',
        'Instructor(s)': 'R SHEKHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ELECTROCHEMICAL TECHNOLOGY IN MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE613A',
        'Department': 'MSE',
        'Inst. email': 'vidtan@iitk.ac.in',
        'Instructor(s)': 'R SHEKHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'ELECTROCHEMICAL TECHNOLOGY IN MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE615',
        'Department': 'MSE',
        'Inst. email': 'ashishg@iitk.ac.in',
        'Instructor(s)': 'ASHISH GARG',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'STRUCTURE AND CHARACTERIZATION OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE615A',
        'Department': 'MSE',
        'Inst. email': 'ashishg@iitk.ac.in',
        'Instructor(s)': 'ASHISH GARG',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'STRUCTURE AND CHARACTERIZATION OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE626A',
        'Department': 'MSE',
        'Inst. email': 'dipak@iitk.ac.in',
        'Instructor(s)': 'DIPAK MAZUMDAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'TRANSPORT PHENOMENA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE626N',
        'Department': 'MSE',
        'Inst. email': 'dipak@iitk.ac.in',
        'Instructor(s)': 'DIPAK MAZUMDAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'TRANSPORT PHENOMENA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE628',
        'Department': 'MSE',
        'Inst. email': 'saboo@iitk.ac.in',
        'Instructor(s)': 'DEEPAK GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ELECTRONIC DEVICES AND CHARACTERIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE628A',
        'Department': 'MSE',
        'Inst. email': 'saboo@iitk.ac.in',
        'Instructor(s)': 'DEEPAK GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ELECTRONIC DEVICES AND CHARACTERIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE642',
        'Department': 'MSE',
        'Inst. email': 'gouthama@iitk.ac.in',
        'Instructor(s)': 'GOUTHAMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'MICROSCOPY AND MICROANALYSIS OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE642A',
        'Department': 'MSE',
        'Inst. email': 'gouthama@iitk.ac.in',
        'Instructor(s)': 'GOUTHAMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 12:00-13:30 REQ;',
        'Title': 'MICROSCOPY AND MICROANALYSIS OF MATERIALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE648',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'S INGOLE',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'DIFFUSION IN SOLIDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE648A',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'S INGOLE',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'DIFFUSION IN SOLIDS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE658',
        'Department': 'MSE',
        'Inst. email': 'anandh@iitk.ac.in',
        'Instructor(s)': 'A SUBRAMANIAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'DISLOCATIONS AND PLASTICITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE658A',
        'Department': 'MSE',
        'Inst. email': 'anandh@iitk.ac.in',
        'Instructor(s)': 'A SUBRAMANIAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'DISLOCATIONS AND PLASTICITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE659',
        'Department': 'MSE',
        'Inst. email': 'anishu@iitk.ac.in',
        'Instructor(s)': 'A UPADHYAYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'POWDER METALLURGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE659A',
        'Department': 'MSE',
        'Inst. email': 'anishu@iitk.ac.in',
        'Instructor(s)': 'A UPADHYAYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'POWDER METALLURGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE664',
        'Department': 'MSE',
        'Inst. email': 'somar@iitk.ac.in',
        'Instructor(s)': 'SHOBHIT OMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'SOLID STATE IONICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE664A',
        'Department': 'MSE',
        'Inst. email': 'somar@iitk.ac.in',
        'Instructor(s)': 'SHOBHIT OMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 11:00-12:00 REQ;WF 16:00-17:00 REQ;',
        'Title': 'SOLID STATE IONICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE665',
        'Department': 'MSE',
        'Inst. email': 'gouthama@iitk.ac.in',
        'Instructor(s)': 'GOUTHAMA',
        'Pre-requisites': 'MSE653',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'PRACTICAL TRANSMISSION ELECTRON MICROSCOPY &',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE665A',
        'Department': 'MSE',
        'Inst. email': 'gouthama@iitk.ac.in',
        'Instructor(s)': 'GOUTHAMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;',
        'Title': 'PRACTICAL TRANSMISSION ELECTRON MICROSCOPY &',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE670',
        'Department': 'MSE',
        'Inst. email': 'kbiswas@iitk.ac.in',
        'Instructor(s)': 'K BISWAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'SOLIDIFICATION PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE670A',
        'Department': 'MSE',
        'Inst. email': 'kbiswas@iitk.ac.in',
        'Instructor(s)': 'K BISWAS',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'SOLIDIFICATION PROCESSING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE671',
        'Department': 'MSE',
        'Inst. email': 'kallol@iitk.ac.in',
        'Instructor(s)': 'K MONDAL, SANDEEP SANGAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'HEAT TREATMENT AND SURFACE HARDENING',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE671A',
        'Department': 'MSE',
        'Inst. email': 'kallol@iitk.ac.in',
        'Instructor(s)': 'K MONDAL, SANDEEP SANGAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;',
        'Title': 'HEAT TREATMENT AND SURFACE HARDENING',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE682',
        'Department': 'MSE',
        'Inst. email': 'bsomnath@iitk.ac.in',
        'Instructor(s)': 'SOMNATH BHOWMICK',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'COMPUTER SIMULATIONS IN MATERIALS SCIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE682A',
        'Department': 'MSE',
        'Inst. email': 'bsomnath@iitk.ac.in',
        'Instructor(s)': 'SOMNATH BHOWMICK',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;W 14:00-15:00 REQ;',
        'Title': 'COMPUTER SIMULATIONS IN MATERIALS SCIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE690',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SEMINAR PARTICIPATION',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MSE691',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SEMINAR PRESENTATION',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MSE693',
        'Department': 'MSE',
        'Inst. email': 'vverma@iitk.ac.in',
        'Instructor(s)': 'VIVEK VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MATERIALS SCIENCE TECHNOLOGIES FOR APPLICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE693A',
        'Department': 'MSE',
        'Inst. email': 'vverma@iitk.ac.in',
        'Instructor(s)': 'VIVEK VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'MATERIALS SCIENCE TECHNOLOGIES FOR APPLICATIONS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE694',
        'Department': 'MSE',
        'Inst. email': 'kbalani@iitk.ac.in',
        'Instructor(s)': 'K BALANI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'NANOSTRUCTURES AND NANOMATERIALS:',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MSE694A',
        'Department': 'MSE',
        'Inst. email': 'kbalani@iitk.ac.in',
        'Instructor(s)': 'K BALANI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 14:00-15:30 REQ;',
        'Title': 'NANOSTRUCTURES AND NANOMATERIALS:',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MSE699',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M.TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MSE799',
        'Department': 'MSE',
        'Inst. email': 'sarang@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PH D THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'MSO202',
        'Department': 'MTH',
        'Inst. email': 'dhiren@iitk.ac.in',
        'Instructor(s)': 'D BAHUGUNA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WThF 09:00-10:00 L7;',
        'Title': 'COMPLEX VARIABLES',
        'Units': '(L-T-P-D-U)         3-1-0-0-2'
    },
    {
        'Course No': 'MSO202A',
        'Department': 'MTH',
        'Inst. email': 'dhiren@iitk.ac.in',
        'Instructor(s)': 'D BAHUGUNA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WThF 09:00-10:00 L7;T/D: M 09:00-10:00 REQ;',
        'Title': 'COMPLEX VARIABLES',
        'Units': '(L-T-P-D-U)         3-1-0-0-6'
    },
    {
        'Course No': 'MSO203B',
        'Department': 'MTH',
        'Inst. email': 'malayb@iitk.ac.in',
        'Instructor(s)': 'MALAY BANERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: WThF 09:00-10:00 L7;T/D: M 09:00-10:00 REQ;',
        'Title': 'PARTIAL DIFFERENTIAL EQUATIONS',
        'Units': '(L-T-P-D-U)         3-1-0-0-6'
    },
    {
        'Course No': 'MTH101A',
        'Department': 'MTH',
        'Inst. email': 'chavan@iitk.ac.in',
        'Instructor(s)': 'S CHAVAN, N NILAKANTAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 10:00-11:00 L7;T 10:00-11:00 REQ;T/D:',
        'Title': 'MATHEMATICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH102A',
        'Department': 'MTH',
        'Inst. email': 'arlal@iitk.ac.in',
        'Instructor(s)': 'A K LAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWTh 17:00-18:00 L6;T/D: T 17:00-18:00 L6;',
        'Title': 'MATHEMATICS - II',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH201',
        'Department': 'MTH',
        'Inst. email': 'psraj@iitk.ac.in',
        'Instructor(s)': 'P SHUNMUGARAJ',
        'Pre-requisites': 'MTH102N',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: F 10:00-11:00',
        'Title': 'LINEAR ALGEBRA',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH201A',
        'Department': 'MTH',
        'Inst. email': 'psraj@iitk.ac.in',
        'Instructor(s)': 'P SHUNMUGARAJ',
        'Pre-requisites': 'MTH102A',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: F 14:00-15:00',
        'Title': 'LINEAR ALGEBRA',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH204',
        'Department': 'MTH',
        'Inst. email': 'santosha@iitk.ac.in',
        'Instructor(s)': 'S K PATTANAYAK',
        'Pre-requisites': 'MTH203R/MTH203N',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;T/D: T 17:00-18:00 REQ;',
        'Title': 'ALGEBRA I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH204A',
        'Department': 'MTH',
        'Inst. email': 'santosha@iitk.ac.in',
        'Instructor(s)': 'S K PATTANAYAK',
        'Pre-requisites': 'MTH102A',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;T/D: T 17:00-18:00 REQ;',
        'Title': 'ABSTRACT ALGEBRA',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH301',
        'Department': 'MTH',
        'Inst. email': 'parasar@iitk.ac.in',
        'Instructor(s)': 'P MOHANTY',
        'Pre-requisites': 'MTH101N',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;T/D: Th 12:00-13:00',
        'Title': 'ANALYSIS - I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH301A',
        'Department': 'MTH',
        'Inst. email': 'parasar@iitk.ac.in',
        'Instructor(s)': 'P MOHANTY',
        'Pre-requisites': 'MTH101A',
        'Schedule': 'LEC: MWF 12:00-13:00 REQ;T/D: Th 12:00-13:00',
        'Title': 'ANALYSIS- I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH305',
        'Department': 'MTH',
        'Inst. email': 'sudipta@iitk.ac.in',
        'Instructor(s)': 'S DUTTA',
        'Pre-requisites': 'MTH301',
        'Schedule': 'LEC: MWF 11:00-12:00 REQ;T/D: Th 11:00-12:00',
        'Title': 'SEVERAL VARIABLE CALCULUS & DEFFERENTIAL',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH305A',
        'Department': 'MTH',
        'Inst. email': 'sudipta@iitk.ac.in',
        'Instructor(s)': 'S DUTTA',
        'Pre-requisites': 'MTH301A',
        'Schedule': 'LEC: MWF 11:00-12:00 REQ;T/D: Th 11:00-12:00',
        'Title': 'SEVERAL VARIABLE CALCULUS & DEFFERENTIAL',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH391A',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-I)',
        'Units': '(L-T-P-D-U)         0-0-0-0-4'
    },
    {
        'Course No': 'MTH393A',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'UG PROJECT (UGP-III)',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH399A',
        'Department': 'MTH',
        'Inst. email': 'madan@iitk.ac.in',
        'Instructor(s)': 'S MADAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 10:00-12:00 REQ;',
        'Title': 'TECHNICAL COMMUNICATION',
        'Units': '(L-T-P-D-U)         0-0-0-2-2'
    },
    {
        'Course No': 'MTH401',
        'Department': 'MTH',
        'Inst. email': 'mohua@iitk.ac.in',
        'Instructor(s)': 'MOHUA BANERJEE',
        'Pre-requisites': 'ESO211/MTH303',
        'Schedule': 'LEC: TWF 16:00-17:00 REQ;',
        'Title': 'THEORY OF COMPUTATION',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH401A',
        'Department': 'MTH',
        'Inst. email': 'mohua@iitk.ac.in',
        'Instructor(s)': 'MOHUA BANERJEE',
        'Pre-requisites': 'ESO207A',
        'Schedule': 'LEC: TWF 16:00-17:00 REQ;',
        'Title': 'THEORY OF COMPUTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH403',
        'Department': 'MTH',
        'Inst. email': 'debasis@iitk.ac.in',
        'Instructor(s)': 'D SEN',
        'Pre-requisites': 'MTH301',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D: W',
        'Title': 'COMPLEX ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH403A',
        'Department': 'MTH',
        'Inst. email': 'debasis@iitk.ac.in',
        'Instructor(s)': 'D SEN',
        'Pre-requisites': 'MTH301A',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D: W',
        'Title': 'COMPLEX ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH405',
        'Department': 'MTH',
        'Inst. email': 'spusti@iitk.ac.in',
        'Instructor(s)': 'S PUSTI',
        'Pre-requisites': 'MTH301',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;T/D: F 12:00-13:00',
        'Title': 'FUNCTIONAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH405A',
        'Department': 'MTH',
        'Inst. email': 'spusti@iitk.ac.in',
        'Instructor(s)': 'S PUSTI',
        'Pre-requisites': 'MTH301',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;T/D: F 12:00-13:00',
        'Title': 'FUNCTIONAL ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH409',
        'Department': 'MTH',
        'Inst. email': 'akasha@iitk.ac.in',
        'Instructor(s)': 'A ANAND',
        'Pre-requisites': '',
        'Schedule': 'LEC: MT 11:00-12:00 REQ;T/D: Th 11:00-12:00 REQ;',
        'Title': 'COMPUTER PROGRAMMING AND DATA STRUCTURES',
        'Units': '(L-T-P-D-U)         2-1-1-0-4'
    },
    {
        'Course No': 'MTH412',
        'Department': 'MTH',
        'Inst. email': 'subhra@iitk.ac.in',
        'Instructor(s)': 'S S DHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D:',
        'Title': 'APPLIED STOCHASTIC PROCESS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH412A',
        'Department': 'MTH',
        'Inst. email': 'subhra@iitk.ac.in',
        'Instructor(s)': 'S S DHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D:',
        'Title': 'APPLIED STOCHASTIC PROCESS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH415',
        'Department': 'MTH',
        'Inst. email': 'smitra@iitk.ac.in',
        'Instructor(s)': 'S MITRA',
        'Pre-requisites': 'ESO209',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: W 10:00-11:00',
        'Title': 'MATRIX THEORY AND LINEAR ESTIMATION',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH415A',
        'Department': 'MTH',
        'Inst. email': 'smitra@iitk.ac.in',
        'Instructor(s)': 'S MITRA',
        'Pre-requisites': 'MSO201A',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: W 10:00-11:00',
        'Title': 'MATRIX THEORY AND LINEAR ESTIMATION',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH417',
        'Department': 'MTH',
        'Inst. email': 'shalab@iitk.ac.in',
        'Instructor(s)': 'SHALABH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;T/D: F 14:00-15:00',
        'Title': 'SAMPLING THEORY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH417A',
        'Department': 'MTH',
        'Inst. email': 'shalab@iitk.ac.in',
        'Instructor(s)': 'SHALABH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;T/D: F 14:00-15:00',
        'Title': 'SAMPLING THEORY',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH423',
        'Department': 'MTH',
        'Inst. email': 'prawal@iitk.ac.in',
        'Instructor(s)': 'P SINHA',
        'Pre-requisites': 'MTH203',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: F 15:00-16:00',
        'Title': 'INTRODUCTION TO CONTINUUM MACHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH423A',
        'Department': 'MTH',
        'Inst. email': 'prawal@iitk.ac.in',
        'Instructor(s)': 'P SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: F 15:00-16:00',
        'Title': 'INTRODUCTION TO CONTINUUM MACHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH425',
        'Department': 'MTH',
        'Inst. email': 'kundu@iitk.ac.in',
        'Instructor(s)': 'D KUNDU',
        'Pre-requisites': 'MSO201',
        'Schedule': 'LEC: MWF 09:00-10:00 REQ;T/D: T 09:00-10:00 REQ;',
        'Title': 'DISTRIBUTIONS IN STATISTICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-2'
    },
    {
        'Course No': 'MTH428',
        'Department': 'MTH',
        'Inst. email': 'pravir@iitk.ac.in',
        'Instructor(s)': 'P DUTT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D: W',
        'Title': 'MATHEMATICAL METHODS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH428A',
        'Department': 'MTH',
        'Inst. email': 'pravir@iitk.ac.in',
        'Instructor(s)': 'P DUTT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MF 08:00-09:00 REQ;T 09:00-10:00 REQ;T/D: W',
        'Title': 'MATHEMATICAL METHODS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH515',
        'Department': 'MTH',
        'Inst. email': 'idd@iitk.ac.in',
        'Instructor(s)': 'I D DHARIYAL',
        'Pre-requisites': 'MTH418',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;T/D: F 14:00-15:00',
        'Title': 'INFERENCE - II',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH515A',
        'Department': 'MTH',
        'Inst. email': 'idd@iitk.ac.in',
        'Instructor(s)': 'I D DHARIYAL',
        'Pre-requisites': 'MTH418A',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;T/D: F 14:00-15:00',
        'Title': 'INFERENCE - II',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH517',
        'Department': 'MTH',
        'Inst. email': 'amitra@iitk.ac.in',
        'Instructor(s)': 'A MITRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 15:00-16:00 REQ;T/D: W 14:00-15:00',
        'Title': 'TIME SERIES ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH517A',
        'Department': 'MTH',
        'Inst. email': 'amitra@iitk.ac.in',
        'Instructor(s)': 'A MITRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 15:00-16:00 REQ;T/D: W 14:00-15:00',
        'Title': 'TIME SERIES ANALYSIS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH523',
        'Department': 'MTH',
        'Inst. email': 'peeyush@iitk.ac.in',
        'Instructor(s)': 'P CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;T/D: F 14:00-15:00',
        'Title': 'FLUID MECHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH523A',
        'Department': 'MTH',
        'Inst. email': 'peeyush@iitk.ac.in',
        'Instructor(s)': 'P CHANDRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;T/D: F 14:00-15:00',
        'Title': 'FLUID MECHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'MTH598',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DUGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PROJECT-I',
        'Units': '(L-T-P-D-U)         0-0-7-0-4'
    },
    {
        'Course No': 'MTH599',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'CONVENER DUGC',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'PROJECT- II',
        'Units': '(L-T-P-D-U)         0-0-7-0-4'
    },
    {
        'Course No': 'MTH611',
        'Department': 'MTH',
        'Inst. email': 'akmaloo@iitk.ac.in',
        'Instructor(s)': 'A K MALOO',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 15:00-16:00 REQ;',
        'Title': 'ALGEBRA II',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH611A',
        'Department': '',
        'Inst. email': 'akmaloo@iitk.ac.in',
        'Instructor(s)': 'A K MALOO',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 15:00-16:00 REQ;',
        'Title': 'ALGEBRA II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH612',
        'Department': 'MTH',
        'Inst. email': 'amandal@iitk.ac.in',
        'Instructor(s)': 'A MANDAL',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:00-11:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'INTRODUCTION TO COMMUTATIVE ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH612A',
        'Department': 'MTH',
        'Inst. email': 'amandal@iitk.ac.in',
        'Instructor(s)': 'A MANDAL',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:00-11:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'INTRODUCTION TO COMMUTATIVE ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH620',
        'Department': 'MTH',
        'Inst. email': 'manjul@iitk.ac.in',
        'Instructor(s)': 'M GUPTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;',
        'Title': 'MEASURE THEORY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH620A',
        'Department': 'MTH',
        'Inst. email': 'manjul@iitk.ac.in',
        'Instructor(s)': 'M GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;',
        'Title': 'MEASURE THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH647',
        'Department': 'MTH',
        'Inst. email': 'gp@iitk.ac.in',
        'Instructor(s)': 'G P KAPOOR',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:00-11:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'COMPLEX ANALYTIC DYNAMICS AND FRACTALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH647A',
        'Department': 'MTH',
        'Inst. email': 'gp@iitk.ac.in',
        'Instructor(s)': 'G P KAPOOR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:00-11:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'COMPLEX ANALYTIC DYNAMICS AND FRACTALS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH648',
        'Department': 'MTH',
        'Inst. email': 'santhana@iitk.ac.in',
        'Instructor(s)': 'G SANTHANAM',
        'Pre-requisites': 'MTH301',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'DIFFERENTIAL GEOMETRY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH648A',
        'Department': 'MTH',
        'Inst. email': 'santhana@iitk.ac.in',
        'Instructor(s)': 'G SANTHANAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'DIFFERENTIAL GEOMETRY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH649',
        'Department': 'MTH',
        'Inst. email': 'adar@iitk.ac.in',
        'Instructor(s)': 'A DAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;',
        'Title': 'ALGEBRAIC TOPOLOGY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH649A',
        'Department': 'MTH',
        'Inst. email': 'adar@iitk.ac.in',
        'Instructor(s)': 'A DAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;',
        'Title': 'ALGEBRAIC TOPOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH658',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'S GHORAI',
        'Pre-requisites': 'MTH421',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'NONLINEAR DYNAMICAL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH658A',
        'Department': 'MTH',
        'Inst. email': 'sghorai@iitk.ac.in',
        'Instructor(s)': 'S GHORAI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'NONLINEAR DYNAMICAL SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH686',
        'Department': 'MTH',
        'Inst. email': 'kundu@iitk.ac.in',
        'Instructor(s)': 'D KUNDU',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;',
        'Title': 'NON-LINEAR REGRESSION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH686A',
        'Department': 'MTH',
        'Inst. email': 'kundu@iitk.ac.in',
        'Instructor(s)': 'D KUNDU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;',
        'Title': 'NON-LINEAR REGRESSION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH691',
        'Department': 'MTH',
        'Inst. email': 'rksr@iitk.ac.in',
        'Instructor(s)': 'RKS RATHORE',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'NUMERICAL LINEAR ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH691A',
        'Department': 'MTH',
        'Inst. email': 'rksr@iitk.ac.in',
        'Instructor(s)': 'RKS RATHORE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'NUMERICAL LINEAR ALGEBRA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH692',
        'Department': 'MTH',
        'Inst. email': 'kadal@iitk.ac.in',
        'Instructor(s)': 'M K KADALBAJOO',
        'Pre-requisites': '#',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'NUMERICAL SOLUTION OF ORDINARY DIFFERENTIAL',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'MTH692A',
        'Department': 'MTH',
        'Inst. email': 'kadal@iitk.ac.in',
        'Instructor(s)': 'M K KADALBAJOO',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'NUMERICAL SOLUTION OF ORDINARY DIFFERENTIAL',
        'Units': '(L-T-P-D-U)         3-1-0-0-9'
    },
    {
        'Course No': 'MTH698',
        'Department': 'MTH',
        'Inst. email': 'bvrk@iitk.ac.in',
        'Instructor(s)': 'B V R KUMAR',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;',
        'Title': 'PARALLEL NUMERICAL ALGORITHM',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH698A',
        'Department': 'MTH',
        'Inst. email': 'bvrk@iitk.ac.in',
        'Instructor(s)': 'B V R KUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;',
        'Title': 'PARALLEL NUMERICAL ALGORITHM',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH719',
        'Department': 'MTH',
        'Inst. email': 'tmk@iitk.ac.in',
        'Instructor(s)': 'T MUTHUKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;',
        'Title': 'INTRODUCTION TO HOMOGENIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH719A',
        'Department': 'MTH',
        'Inst. email': 'tmk@iitk.ac.in',
        'Instructor(s)': 'T MUTHUKUMAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;',
        'Title': 'INTRODUCTION TO HOMOGENIZATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH736',
        'Department': 'MTH',
        'Inst. email': 'rrawat@iitk.ac.in',
        'Instructor(s)': 'R RAWAT',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FOURIER ANALYSIS-I & DISTRIBUTION THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH736A',
        'Department': 'MTH',
        'Inst. email': 'rrawat@iitk.ac.in',
        'Instructor(s)': 'R RAWAT',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'FOURIER ANALYSIS-I & DISTRIBUTION THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH753',
        'Department': 'MTH',
        'Inst. email': 'rrawat@iitk.ac.in',
        'Instructor(s)': 'R RAWAT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;',
        'Title': 'ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH753A',
        'Department': 'MTH',
        'Inst. email': 'rrawat@iitk.ac.in',
        'Instructor(s)': 'R RAWAT',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 14:00-15:00 REQ;',
        'Title': 'ANALYSIS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH754',
        'Department': 'MTH',
        'Inst. email': 'neeraj@iitk.ac.in',
        'Instructor(s)': 'NEERAJ MISRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'PROBABILITY THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'MTH754A',
        'Department': 'MTH',
        'Inst. email': 'neeraj@iitk.ac.in',
        'Instructor(s)': 'NEERAJ MISRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:00-11:00 REQ;T 12:00-13:00 REQ;',
        'Title': 'PROBABILITY THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'MTH799',
        'Department': 'MTH',
        'Inst. email': 'smitra@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'RESEARCH',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'NT602',
        'Department': 'NET',
        'Inst. email': 'singhop@iitk.ac.in',
        'Instructor(s)': 'O P SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'NUCLEAR AND REACTOR PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'NT602A',
        'Department': 'NET',
        'Inst. email': 'singhop@iitk.ac.in',
        'Instructor(s)': 'O P SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'NUCLEAR AND REACTOR PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'NT611',
        'Department': 'ME',
        'Inst. email': 'akhanna@iitk.ac.in',
        'Instructor(s)': 'A KHANNA, P MUNSHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'NUCLEAR POWER ENGINEERING I',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'NT611A',
        'Department': 'ME',
        'Inst. email': 'akhanna@iitk.ac.in',
        'Instructor(s)': 'A KHANNA, P MUNSHI',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'NUCLEAR POWER ENGINEERING I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'NT621',
        'Department': 'NET',
        'Inst. email': 'shikhap@iitk.ac.in',
        'Instructor(s)': 'S PRASHAD, O P SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'NUCLEAR MEASUREMENTS LABORATORY',
        'Units': '(L-T-P-D-U)         1-0-6-0-4'
    },
    {
        'Course No': 'NT621A',
        'Department': 'NET',
        'Inst. email': 'shikhap@iitk.ac.in',
        'Instructor(s)': 'S PRASHAD, O P SINGH',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'NUCLEAR MEASUREMENTS LABORATORY',
        'Units': '(L-T-P-D-U)         1-0-6-0-9'
    },
    {
        'Course No': 'NT699',
        'Department': 'NET',
        'Inst. email': 'pmunshi@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M TECH THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'NT799',
        'Department': 'NET',
        'Inst. email': 'pmunshi@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'PE101A',
        'Department': 'SPEC',
        'Inst. email': '',
        'Instructor(s)': '',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'MORNING EXERCISE',
        'Units': '(L-T-P-D-U)         0-0-3-0-3'
    },
    {
        'Course No': 'PHI141',
        'Department': 'HSS',
        'Inst. email': 'pbagad@iitk.ac.in',
        'Instructor(s)': 'P BAGAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'INTRODUCTION TO PHILOSOPHY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHI141A',
        'Department': 'HSS',
        'Inst. email': 'pbagad@iitk.ac.in',
        'Instructor(s)': 'P BAGAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'INTRODUCTION TO PHILOSOPHY',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHI448',
        'Department': 'HSS',
        'Inst. email': 'vineet@iitk.ac.in',
        'Instructor(s)': 'VINEET SAHU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INDIVIDUAL VS AUTHORITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHI448A',
        'Department': 'HSS',
        'Inst. email': 'vineet@iitk.ac.in',
        'Instructor(s)': 'VINEET SAHU',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INDIVIDUAL VS AUTHORITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHI768',
        'Department': 'HSS',
        'Inst. email': 'avrs@iitk.ac.in',
        'Instructor(s)': 'A V R SHARMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'MODAL LOGIC',
        'Units': '(L-T-P-D-U)         4-0-0-0-4'
    },
    {
        'Course No': 'PHI784',
        'Department': 'HSS',
        'Inst. email': 'pbagad@iitk.ac.in',
        'Instructor(s)': 'P BAGAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'TWENTIETH CENTURY CONTINENTAL PHILOSOPHY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHI799',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'PHY100',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'INTRODUCTION TO PROFESSION',
        'Units': '(L-T-P-D-U)         1-0-2-0-0'
    },
    {
        'Course No': 'PHY101A',
        'Department': 'PHY',
        'Inst. email': 'asima@iitk.ac.in',
        'Instructor(s)': 'ASIMA PRADHAN',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHYSICS LABORATORY',
        'Units': '(L-T-P-D-U)         0-0-3-0-3'
    },
    {
        'Course No': 'PHY102A',
        'Department': 'PHY',
        'Inst. email': 'amitag@iitk.ac.in',
        'Instructor(s)': 'AMIT AGARWAL, R PRASAD',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 15:00-16:00 L7;T/D: Th 15:00-16:00 REQ;',
        'Title': 'PHYSICS-I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY103A',
        'Department': 'PHY',
        'Inst. email': 'sudeepb@iitk.ac.in',
        'Instructor(s)': 'BHATTACHARJEE SUDEEP, H C VERMA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 11:00-12:00 L7;T/D: T 11:00-12:00 REQ;',
        'Title': 'PHYSICS-II',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY218',
        'Department': 'PHY',
        'Inst. email': 'sar@iitk.ac.in',
        'Instructor(s)': 'S A RAMAKRISHNA, S GHOSH',
        'Pre-requisites': 'PHY103N',
        'Schedule': 'LEC: T 17:00-18:00 REQ;',
        'Title': 'OPTICS LAB',
        'Units': '(L-T-P-D-U)         1-0-4-0-4'
    },
    {
        'Course No': 'PHY224',
        'Department': 'PHY',
        'Inst. email': 'sar@iitk.ac.in',
        'Instructor(s)': 'S A RAMAKRISHNA, S GHOSH',
        'Pre-requisites': 'PHY103N',
        'Schedule': 'LEC: TW 17:00-18:00 REQ;',
        'Title': 'OPTICAL PHYSICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY224A',
        'Department': 'PHY',
        'Inst. email': 'sar@iitk.ac.in',
        'Instructor(s)': 'S A RAMAKRISHNA, S GHOSH',
        'Pre-requisites': '',
        'Schedule': 'LEC: TW 17:00-18:00 REQ;',
        'Title': 'OPTICS',
        'Units': '(L-T-P-D-U)         2-0-2-0-12'
    },
    {
        'Course No': 'PHY311',
        'Department': 'PHY',
        'Inst. email': 'debch@iitk.ac.in',
        'Instructor(s)': 'D CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PHYSICS OF NON-EQUILIBRIUM PHENOMENA',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY311A',
        'Department': 'PHY',
        'Inst. email': 'debch@iitk.ac.in',
        'Instructor(s)': 'D CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PHYSICS OF NON-EQUILIBRIUM PHENOMENA',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY315A',
        'Department': 'PHY',
        'Inst. email': 'guptaraj@iitk.ac.in',
        'Instructor(s)': 'R GUPTA, S MUKHOPADHYAY',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 08:00-09:00 REQ;',
        'Title': 'MODERN PHYSICS LABORATORY',
        'Units': '(L-T-P-D-U)         1-0-6-0-9'
    },
    {
        'Course No': 'PHY400',
        'Department': 'PHY',
        'Inst. email': 'akjha@iitk.ac.in',
        'Instructor(s)': 'A K JHA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'INTRODUCTION TO THE DEPARTMENT',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'PHY401',
        'Department': 'PHY',
        'Inst. email': 'sagarc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABORTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:00 REQ;T/D: W 12:00-13:00 REQ;',
        'Title': 'CLASSICAL MECHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY401A',
        'Department': 'PHY',
        'Inst. email': 'sagarc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABORTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:30 REQ;T/D: W 12:00-13:00 REQ;',
        'Title': 'CLASSICAL MECHANICS',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY407',
        'Department': 'PHY',
        'Inst. email': 'kaushikb@iitk.ac.in',
        'Instructor(s)': 'K BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SPECIAL & GENERAL RELATIVITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY407A',
        'Department': 'PHY',
        'Inst. email': 'kaushikb@iitk.ac.in',
        'Instructor(s)': 'K BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SPECIAL & GENERAL RELATIVITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY421',
        'Department': 'PHY',
        'Inst. email': 'tkghosh@iitk.ac.in',
        'Instructor(s)': 'T K GHOSE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;T/D: F 08:00-09:00 REQ;',
        'Title': 'MATHEMATICAL METHODS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY421A',
        'Department': 'PHY',
        'Inst. email': 'tkghosh@iitk.ac.in',
        'Instructor(s)': 'T K GHOSE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;T/D: F 08:00-09:00 REQ;',
        'Title': 'MATHEMATICAL METHODS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY431',
        'Department': 'PHY',
        'Inst. email': 'tapo@iitk.ac.in',
        'Instructor(s)': 'T SARKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;T/D: T 09:00-10:00 REQ;',
        'Title': 'QUANTUM MECHANICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY431A',
        'Department': 'PHY',
        'Inst. email': 'tapo@iitk.ac.in',
        'Instructor(s)': 'T SARKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 09:00-10:30 REQ;T/D: T 09:00-10:00 REQ;',
        'Title': 'QUANTUM MECHANICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY441',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA, A KELKAR',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;T/D: T 11:00-12:00',
        'Title': 'ELECTRONICS',
        'Units': '(L-T-P-D-U)         2-1-4-0-5'
    },
    {
        'Course No': 'PHY441A',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA, A KELKAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 11:00-12:00 REQ;T/D: T 11:00-12:00',
        'Title': 'ELECTRONICS',
        'Units': '(L-T-P-D-U)         2-1-3-0-11'
    },
    {
        'Course No': 'PHY461',
        'Department': 'PHY',
        'Inst. email': 'zakir@iitk.ac.in',
        'Instructor(s)': 'Z HOSSAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTAL PHYSICS I',
        'Units': '(L-T-P-D-U)         0-0-8-0-4'
    },
    {
        'Course No': 'PHY461A',
        'Department': 'PHY',
        'Inst. email': 'zakir@iitk.ac.in',
        'Instructor(s)': 'Z HOSSAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTAL PHYSICS I',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY462',
        'Department': 'PHY',
        'Inst. email': 'zakir@iitk.ac.in',
        'Instructor(s)': 'Z HOSSAIN',
        'Pre-requisites': 'PHY461',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTAL PHYSICS II',
        'Units': '(L-T-P-D-U)         0-0-8-0-4'
    },
    {
        'Course No': 'PHY462A',
        'Department': 'PHY',
        'Inst. email': 'zakir@iitk.ac.in',
        'Instructor(s)': 'Z HOSSAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'EXPERIMENTAL PHYSICS II',
        'Units': '(L-T-P-D-U)         0-0-8-0-9'
    },
    {
        'Course No': 'PHY501',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M SC REVIEW PROJECT II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY543',
        'Department': 'PHY',
        'Inst. email': 'satyajit@iitk.ac.in',
        'Instructor(s)': 'S BANERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: F 12:00-13:00',
        'Title': 'CONDENSED MATTER PHYSICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY543A',
        'Department': 'PHY',
        'Inst. email': 'satyajit@iitk.ac.in',
        'Instructor(s)': 'S BANERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 10:00-11:00 REQ;T/D: F 12:00-13:00',
        'Title': 'CONDENSED MATTER PHYSICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY552',
        'Department': 'PHY',
        'Inst. email': 'pkjain@iitk.ac.in',
        'Instructor(s)': 'PANKAJ JAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: Th 17:00-18:00',
        'Title': 'CLASSICAL ELECTRODYNAMICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PHY552A',
        'Department': 'PHY',
        'Inst. email': 'pkjain@iitk.ac.in',
        'Instructor(s)': 'PANKAJ JAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;T/D: Th 17:00-18:00',
        'Title': 'CLASSICAL ELECTRODYNAMICS I',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PHY555A',
        'Department': 'PHY',
        'Inst. email': 'anjankg@iitk.ac.in',
        'Instructor(s)': 'A K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'BATCHLOR OF SCIENCE PROJECT -1',
        'Units': '(L-T-P-D-U)         0-0-1-2-9'
    },
    {
        'Course No': 'PHY556A',
        'Department': 'PHY',
        'Inst. email': 'anjankg@iitk.ac.in',
        'Instructor(s)': 'A K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'BATCHLOR OF SCIENCE PROJECT -II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY563',
        'Department': 'PHY',
        'Inst. email': 'sar@iitk.ac.in',
        'Instructor(s)': 'S A RAMAKRISHNA',
        'Pre-requisites': 'PHY462',
        'Schedule': 'LEC:',
        'Title': 'M.SC. PROJECT I',
        'Units': '(L-T-P-D-U)         0-0-8-0-4'
    },
    {
        'Course No': 'PHY565',
        'Department': 'PHY',
        'Inst. email': 'sar@iitk.ac.in',
        'Instructor(s)': 'S A RAMAKRISHNA',
        'Pre-requisites': 'PHY462',
        'Schedule': 'LEC:',
        'Title': 'M.SC. PROJECT II',
        'Units': '(L-T-P-D-U)         0-0-8-0-4'
    },
    {
        'Course No': 'PHY590',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA',
        'Pre-requisites': '#',
        'Schedule': 'LEC:',
        'Title': 'SPECIAL TOPICS IN PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY599',
        'Department': 'PHY',
        'Inst. email': 'sengupta@iitk.ac.in',
        'Instructor(s)': 'G SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'M.SC. PROJECT-I',
        'Units': '(L-T-P-D-U)         0-0-20-4-12'
    },
    {
        'Course No': 'PHY601',
        'Department': 'PHY',
        'Inst. email': 'sutapam@iitk.ac.in',
        'Instructor(s)': 'S MUKHERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 14:00-15:00 REQ;T/D: TWTh 14:00-15:00',
        'Title': 'REVIEW OF CLASSICAL PHYSICS I',
        'Units': '(L-T-P-D-U)         1-3-0-0-4'
    },
    {
        'Course No': 'PHY601A',
        'Department': 'PHY',
        'Inst. email': 'sutapam@iitk.ac.in',
        'Instructor(s)': 'S MUKHERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 14:00-15:00 REQ;T/D: TWTh 14:00-15:00',
        'Title': 'REVIEW OF CLASSICAL PHYSICS I',
        'Units': '(L-T-P-D-U)         1-3-0-0-9'
    },
    {
        'Course No': 'PHY603',
        'Department': 'PHY',
        'Inst. email': 'mkh@iitk.ac.in',
        'Instructor(s)': 'M K HARBOLA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:00-16:00 REQ;T/D: TTh 15:00-16:00',
        'Title': 'REVIEW OF CLASSICAL PHYSICS II',
        'Units': '(L-T-P-D-U)         1-3-0-0-4'
    },
    {
        'Course No': 'PHY603A',
        'Department': 'PHY',
        'Inst. email': 'mkh@iitk.ac.in',
        'Instructor(s)': 'M K HARBOLA',
        'Pre-requisites': '',
        'Schedule': 'LEC: M 15:00-16:00 REQ;T/D: TTh 15:00-16:00',
        'Title': 'REVIEW OF CLASSICAL PHYSICS II',
        'Units': '(L-T-P-D-U)         1-3-0-0-9'
    },
    {
        'Course No': 'PHY631',
        'Department': 'PHY',
        'Inst. email': 'ynm@iitk.ac.in',
        'Instructor(s)': 'Y N MOHAPATRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'PHYSICS OF SEMICONDUCTOR NANOSTRUCTURES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY631A',
        'Department': 'PHY',
        'Inst. email': 'ynm@iitk.ac.in',
        'Instructor(s)': 'Y N MOHAPATRA',
        'Pre-requisites': '',
        'Schedule': 'LEC: TWTh 08:00-09:00 REQ;',
        'Title': 'PHYSICS OF SEMICONDUCTOR NANOSTRUCTURES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY632',
        'Department': 'PHY',
        'Inst. email': 'anjankg@iitk.ac.in',
        'Instructor(s)': 'A K GUPTA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TRANSPORT IN MESOSCOPIC SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY632A',
        'Department': 'PHY',
        'Inst. email': 'anjankg@iitk.ac.in',
        'Instructor(s)': 'A K GUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 10:30-12:00 REQ;',
        'Title': 'TRANSPORT IN MESOSCOPIC SYSTEMS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY679',
        'Department': 'PHY',
        'Inst. email': 'pkjain@iitk.ac.in',
        'Instructor(s)': 'PANKAJ JAIN',
        'Pre-requisites': 'PHY680/PHY681',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'THE STANDARD MODEL OF FUNDAMENTAL PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY679A',
        'Department': 'PHY',
        'Inst. email': 'pkjain@iitk.ac.in',
        'Instructor(s)': 'PANKAJ JAIN',
        'Pre-requisites': 'PHY680/PHY681',
        'Schedule': 'LEC: M 17:00-18:00 REQ;WF 15:00-16:00 REQ;',
        'Title': 'THE STANDARD MODEL OF FUNDAMENTAL PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY681',
        'Department': 'PHY',
        'Inst. email': 'sayanta@iitk.ac.in',
        'Instructor(s)': 'SAYANTANI BHATTACHARYA',
        'Pre-requisites': 'PHY432',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'QUANTUM FIELD THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY681A',
        'Department': 'PHY',
        'Inst. email': 'sayanta@iitk.ac.in',
        'Instructor(s)': 'SAYANTANI BHATTACHARYA',
        'Pre-requisites': 'PHY432A',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'QUANTUM FIELD THEORY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY690',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'KRISHNACHARAYA',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'SPECIAL TOPICS IN PHYSICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY690K',
        'Department': 'PHY',
        'Inst. email': 'vmani@iitk.ac.in',
        'Instructor(s)': 'V SUBRAHMANYAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'QUANTUM DYNAMICS, INFORMATION AND COMPUTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY690L',
        'Department': 'PHY',
        'Inst. email': 'hwanare@iitk.ac.in',
        'Instructor(s)': 'HARSHAWARDHAN WANARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;',
        'Title': 'QUANTUM OPTICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY690M',
        'Department': 'PHY',
        'Inst. email': 'sengupta@iitk.ac.in',
        'Instructor(s)': 'G SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ADVANCED GENERAL RELATIVITY AND BLACK HOLES',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY690R',
        'Department': 'PHY',
        'Inst. email': 'vmani@iitk.ac.in',
        'Instructor(s)': 'V SUBRAHMANYAM',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 09:00-10:30 REQ;',
        'Title': 'QUANTUM DYNAMICS, INFORMATION AND COMPUTATION',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY690S',
        'Department': 'PHY',
        'Inst. email': 'hwanare@iitk.ac.in',
        'Instructor(s)': 'HARSHAWARDHAN WANARE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTTh 16:00-17:00 REQ;',
        'Title': 'QUANTUM OPTICS II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY690U',
        'Department': 'PHY',
        'Inst. email': 'sengupta@iitk.ac.in',
        'Instructor(s)': 'G SENGUPTA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'ADVANCE GENERAL RELATIVITY AND BLACK HOLES',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY781',
        'Department': 'PHY',
        'Inst. email': 'dipankar@iitk.ac.in',
        'Instructor(s)': 'D CHAKRABORTI',
        'Pre-requisites': '#',
        'Schedule': 'LEC: M 12:00-13:30 REQ;Th 12:00-13:00 REQ;',
        'Title': 'HIGH ENERGY PHYSICS II',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PHY781A',
        'Department': 'PHY',
        'Inst. email': 'dipankar@iitk.ac.in',
        'Instructor(s)': 'D CHAKRABORTI',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'HIGH ENERGY PHYSICS II',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PHY799',
        'Department': 'PHY',
        'Inst. email': 'kcharya@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'RESEARCH',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'PSY152',
        'Department': 'HSS',
        'Inst. email': 'krp@iitk.ac.in',
        'Instructor(s)': 'K RAVI PRIYA',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'APPLICATION OF PSYCHOLOGY TO LIFE',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PSY152A',
        'Department': 'HSS',
        'Inst. email': 'krp@iitk.ac.in',
        'Instructor(s)': 'K RAVI PRIYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 08:00-09:00 REQ;T/D: Th 08:00-09:00',
        'Title': 'APPLICATION OF PSYCHOLOGY TO LIFE',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'PSY451',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'BRAJ BHUSHAN',
        'Pre-requisites': '#',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'PSYCHOLOGY OF ADJUSTMENT',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PSY451A',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'BRAJ BHUSHAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'PSYCHOLOGY OF ADJUSTMENT',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PSY458',
        'Department': 'HSS',
        'Inst. email': 'aks@iitk.ac.in',
        'Instructor(s)': 'ARVIND K SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ORGANIZATIONAL AND ADMINISTRATIVE PSYCHOLOGY',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'PSY458A',
        'Department': 'HSS',
        'Inst. email': 'aks@iitk.ac.in',
        'Instructor(s)': 'ARVIND K SINHA',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'ORGANIZATIONAL AND ADMINISTRATIVE PSYCHOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'PSY774',
        'Department': 'HSS',
        'Inst. email': 'krp@iitk.ac.in',
        'Instructor(s)': 'K RAVI PRIYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 15:30-17:00 REQ;',
        'Title': 'QUALITATIVE RESEARCH : THEORY AND PRACTICE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PSY775',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'BRAJ BHUSHAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: MTh 12:00-13:30 REQ;',
        'Title': 'FUNDAMENTAL OF NEUROPSYCHOLOGY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'PSY799',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'SE305',
        'Department': 'PHY',
        'Inst. email': 'debch@iitk.ac.in',
        'Instructor(s)': 'D CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PHYSICS OF NON-EQUILIBRIUM PHENOMENA',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'SE305A',
        'Department': 'PHY',
        'Inst. email': 'debch@iitk.ac.in',
        'Instructor(s)': 'D CHOWDHURY',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 10:30-12:00 REQ;',
        'Title': 'PHYSICS OF NON-EQUILIBRIUM PHENOMENA',
        'Units': '(L-T-P-D-U)         3-1-0-0-11'
    },
    {
        'Course No': 'SE314',
        'Department': 'PHY',
        'Inst. email': 'sagarc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABORTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:30 REQ;T/D: W 12:00-13:00 REQ;',
        'Title': 'CLASSICAL MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'SE314A',
        'Department': 'PHY',
        'Inst. email': 'sagarc@iitk.ac.in',
        'Instructor(s)': 'S CHAKRABORTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: TF 12:00-13:30 REQ;T/D: W 12:00-13:00 REQ;',
        'Title': 'CLASSICAL MECHANICS',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'SE315',
        'Department': 'PHY',
        'Inst. email': 'kaushikb@iitk.ac.in',
        'Instructor(s)': 'K BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SPECIAL & GENERAL RELATIVITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'SE315A',
        'Department': 'PHY',
        'Inst. email': 'kaushikb@iitk.ac.in',
        'Instructor(s)': 'K BHATTACHARYA',
        'Pre-requisites': '',
        'Schedule': 'LEC: WF 17:00-18:30 REQ;',
        'Title': 'SPECIAL & GENERAL RELATIVITY',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'SE367',
        'Department': 'CSE',
        'Inst. email': 'amit@iitk.ac.in',
        'Instructor(s)': 'AMITABHA MUKERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INTRODUCTION TO COGNITIVE SEIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-4'
    },
    {
        'Course No': 'SE367A',
        'Department': 'CSE',
        'Inst. email': 'amit@iitk.ac.in',
        'Instructor(s)': 'AMITABHA MUKERJEE',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INTRODUCTION TO COGNITIVE SEIENCE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'SOC473',
        'Department': 'HSS',
        'Inst. email': 'aninditac@iitk.ac.in',
        'Instructor(s)': 'A CHAKRABARTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INDIAN SOCIETY AND CULTURE',
        'Units': '(L-T-P-D-U)         3-1-0-0-4'
    },
    {
        'Course No': 'SOC473A',
        'Department': 'HSS',
        'Inst. email': 'aninditac@iitk.ac.in',
        'Instructor(s)': 'A CHAKRABARTY',
        'Pre-requisites': '',
        'Schedule': 'LEC: MWF 17:00-18:00 REQ;',
        'Title': 'INDIAN SOCIETY AND CULTURE',
        'Units': '(L-T-P-D-U)         3-0-0-0-9'
    },
    {
        'Course No': 'SOC799',
        'Department': 'HSS',
        'Inst. email': 'brajb@iitk.ac.in',
        'Instructor(s)': 'CONVENOR DPGC',
        'Pre-requisites': '',
        'Schedule': 'LEC:',
        'Title': 'PHD THESIS',
        'Units': '(L-T-P-D-U)         0-0-0-0-0'
    },
    {
        'Course No': 'TA101A',
        'Department': 'ME',
        'Inst. email': 'vinodv@iitk.ac.in',
        'Instructor(s)': 'VINOD VASUDEVAN',
        'Pre-requisites': '',
        'Schedule': 'LEC: TTh 14:00-15:00 L7;',
        'Title': 'ENGINEERING GRAPHICS',
        'Units': '(L-T-P-D-U)         2-0-3-0-9'
    },
    {
        'Course No': 'TA201A',
        'Department': 'MSE',
        'Inst. email': 'shashank@iitk.ac.in',
        'Instructor(s)': 'SHASHANK SHEKHAR',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 09:00-10:00 L7;',
        'Title': 'MANUFACTURING PROCESSES I',
        'Units': '(L-T-P-D-U)         1-0-3-0-6'
    },
    {
        'Course No': 'TA202A',
        'Department': 'ME',
        'Inst. email': 'vkjain@iitk.ac.in',
        'Instructor(s)': 'V K JAIN',
        'Pre-requisites': '',
        'Schedule': 'LEC: T 08:00-09:00 L7;',
        'Title': 'MANUFACTURING PROCESSES II',
        'Units': '(L-T-P-D-U)         1-0-3-0-6'
    }
];
    }]);
