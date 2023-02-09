let sorular = ['2+2 KAÇTIR', '5+3 KAÇTIR', '20-15 KAÇTIR', '30+15 KAÇTIR'];
let a = document.getElementById("a").innerHTML;
let aa = document.getElementById("a");
let b = document.getElementById("b").innerHTML;
let bb = document.getElementById("b");
let c = document.getElementById("c").innerHTML;
let cc = document.getElementById("c");
let d = document.getElementById("d").innerHTML;
let dd = document.getElementById("d");
let os = document.getElementById("os");
let rbtn = document.getElementById("randombtn");
let yazidiv = document.getElementById("ydiv");
let spr = 0;
let ok = document.getElementById('ok');
let srp = document.getElementById('srp');
let sada = document.getElementById('sada');
let pd = document.getElementById('pd');
let pd1 = document.getElementById('pd1');
let pd2 = document.getElementById('pd2');
let dc = document.getElementById('CD');
let dy = document.getElementById('CY');
let ref = document.getElementById('ref');
let sor = sorular[0];
let sor1 = sorular[1];
let sor2 = sorular[2];
let sor3 = sorular[3];

rbtn.style.visibility = 'visible';
yazidiv.style.visibility = 'visible';
ok.style.visibility = 'hidden';

rbtn.onclick = function() {
    ok.style.visibility = 'visible';
    sada.style.visibility = 'visible';
    ok.style.width = '55px';
    document.getElementById("srp").innerHTML = spr;
    rbtn.classList.add('d-none');
    srp.style.visibility = 'visible';

document.getElementById("ydiv").innerHTML=sor;

aa.classList.remove('d-none');
bb.classList.remove('d-none');
cc.classList.remove('d-none');
dd.classList.remove('d-none');

rbtn.style.visibility = 'hidden';

ref.onclick = function(){
    window.location.reload();
}

}

aa.onclick = function(){
        if(sordur=sorular[0]=a){
        dc.classList.remove('d-none');
        }
        spr++;
        document.getElementById("srp").innerHTML = spr;
        os.classList.remove('d-none');
        aa.onclick = function(){
            alert('Bir kere secim yapabilirsiniz')
        }
        bb.onclick = function(){
            alert('Bir kere secim yapabilirsiniz')
        }
        cc.onclick = function(){
            alert('Bir kere secim yapabilirsiniz')
        }
        dd.onclick = function(){
            alert('Bir kere secim yapabilirsiniz')
        }
}
bb.onclick = function(){
    if(sordur=sorular[0]=b){
    dy.classList.remove('d-none');
    }
    spr--;
    document.getElementById("srp").innerHTML = spr;
    os.classList.remove('d-none');
    aa.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    bb.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    cc.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    dd.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
}
cc.onclick = function(){
    if(sordur=sorular[0]=c){
    dy.classList.remove('d-none');
    }
    spr--;
    document.getElementById("srp").innerHTML = spr;
    os.classList.remove('d-none');
    aa.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    bb.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    cc.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    dd.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }

}
dd.onclick = function(){
    if(sordur=sorular[0]=d){
    dy.classList.remove('d-none');
    }
    spr--;
    document.getElementById("srp").innerHTML = spr;
    os.classList.remove('d-none');
    aa.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    bb.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    cc.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }
    dd.onclick = function(){
        alert('Bir kere secim yapabilirsiniz')
    }

}

os.onclick = function(){
        aa.classList.remove('d-none');
        aa.innerHTML = "A)10";
        bb.classList.remove('d-none');
        bb.innerHTML = "B)30";
        cc.classList.remove('d-none');
        cc.innerHTML = "C)8";
        dd.classList.remove('d-none');
        dd.innerHTML = "D)7";
        os.classList.add('d-none');
        yazidiv.style.visibility = 'visible';
        document.getElementById("ydiv").innerHTML=sor.remove;
        document.getElementById("ydiv").innerHTML=sor1;
        sada.style.visibility = 'visible';
        ok.style.visibility = 'visible';
        dy.classList.add('d-none');
        dc.classList.add('d-none');

        aa.onclick = function(){
            if(sordur=sorular[1]=c){
            dy.classList.remove('d-none');
            }
            spr--;
            document.getElementById("srp").innerHTML = spr;
            os.classList.remove('d-none');
            aa.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            bb.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            cc.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            dd.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
        }
        bb.onclick = function(){
            if(sordur=sorular[1]=c){
            dy.classList.remove('d-none');
            }
            spr--;
            document.getElementById("srp").innerHTML = spr;
            os.classList.remove('d-none');
            aa.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            bb.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            cc.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            dd.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
        }
        cc.onclick = function(){
            if(sordur=sorular[1]=c){
            dc.classList.remove('d-none');
            }
            spr++;
            document.getElementById("srp").innerHTML = spr;
            os.classList.remove('d-none');
            aa.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            bb.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            cc.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            dd.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
        }
        dd.onclick = function(){
            if(sordur=sorular[1]=c){
            dy.classList.remove('d-none');
            }
            spr--;
            document.getElementById("srp").innerHTML = spr;
            os.classList.remove('d-none');
            aa.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            bb.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            cc.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
            dd.onclick = function(){
                alert('Bir kere secim yapabilirsiniz')
            }
        }
        
        os.onclick = function(){
            aa.classList.remove('d-none');
            aa.innerHTML = "A)35";
            bb.classList.remove('d-none');
            bb.innerHTML = "B)5";
            cc.classList.remove('d-none');
            cc.innerHTML = "C)20";
            dd.classList.remove('d-none');
            dd.innerHTML = "D)9";
            os.classList.add('d-none');
            yazidiv.style.visibility = 'visible';
            document.getElementById("ydiv").innerHTML=sor.remove;
            document.getElementById("ydiv").innerHTML=sor2;
            sada.style.visibility = 'visible';
            ok.style.visibility = 'visible';
            dy.classList.add('d-none');
            dc.classList.add('d-none');

            aa.onclick = function(){
                if(sordur=sorular[2]=b){
                dy.classList.remove('d-none');
                }
                spr--;
                document.getElementById("srp").innerHTML = spr;
                os.classList.remove('d-none');
                aa.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                bb.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                cc.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                dd.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
            }
            bb.onclick = function(){
                if(sordur=sorular[2]=b){
                dc.classList.remove('d-none');
                }
                spr++;
                document.getElementById("srp").innerHTML = spr;
                os.classList.remove('d-none');
                aa.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                bb.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                cc.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                dd.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
            }
            cc.onclick = function(){
                if(sordur=sorular[2]=b){
                dy.classList.remove('d-none');
                }
                spr--;
                document.getElementById("srp").innerHTML = spr;
                os.classList.remove('d-none');
                aa.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                bb.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                cc.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                dd.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
            }
            dd.onclick = function(){
                if(sordur=sorular[2]=b){
                dy.classList.remove('d-none');
                }
                spr--;
                document.getElementById("srp").innerHTML = spr;
                os.classList.remove('d-none');
                aa.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                bb.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                cc.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
                dd.onclick = function(){
                    alert('Bir kere secim yapabilirsiniz')
                }
            }

            os.onclick = function(){
                aa.classList.remove('d-none');
                aa.innerHTML = "A)55";
                bb.classList.remove('d-none');
                bb.innerHTML = "B)25";
                cc.classList.remove('d-none');
                cc.innerHTML = "C)20";
                dd.classList.remove('d-none');
                dd.innerHTML = "D)45";
                os.classList.add('d-none');
                yazidiv.style.visibility = 'visible';
                document.getElementById("ydiv").innerHTML=sor.remove;
                document.getElementById("ydiv").innerHTML=sor3;
                sada.style.visibility = 'visible';
                ok.style.visibility = 'visible';
                dy.classList.add('d-none');
                dc.classList.add('d-none');
                
                aa.onclick = function(){
                    dy.classList.remove('d-none');
                    os.classList.remove('d-none');
                    spr--;
                    document.getElementById("srp").innerHTML = spr;
                    os.onclick = function(){
                        aa.classList.add('d-none');
                        bb.classList.add('d-none');
                        cc.classList.add('d-none');
                        dd.classList.add('d-none');
                        os.classList.add('d-none');
                        yazidiv.style.visibility = 'hidden';
                        sada.style.visibility = 'hidden';

                        if(sordur=sorular[3]=d){
                    }
                    if(srp.innerHTML == 4){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'TAM PUAN';
                    }
                    else if(srp.innerHTML == 3){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA USTU';
                    }
                    else if(srp.innerHTML == 2){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA';
                    }
                    else if(srp.innerHTML <= 1){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'REZALET';
                    }
                    }
                    aa.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    bb.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    cc.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    dd.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                }
                bb.onclick = function(){
                    dy.classList.remove('d-none');
                    os.classList.remove('d-none');
                    spr--;
                    document.getElementById("srp").innerHTML = spr;
                    os.onclick = function(){
                        aa.classList.add('d-none');
                        bb.classList.add('d-none');
                        cc.classList.add('d-none');
                        dd.classList.add('d-none');
                        os.classList.add('d-none');
                        yazidiv.style.visibility = 'hidden';
                        sada.style.visibility = 'hidden';

                        if(sordur=sorular[3]=d){
                    }
                    if(srp.innerHTML == 4){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'TAM PUAN';
                    }
                    else if(srp.innerHTML == 3){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA USTU';
                    }
                    else if(srp.innerHTML == 2){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA';
                    }
                    else if(srp.innerHTML <= 1){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'REZALET';
                    }
                    }
                    aa.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    bb.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    cc.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    dd.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                }
                cc.onclick = function(){
                    dy.classList.remove('d-none');
                    os.classList.remove('d-none');
                    spr--;
                    document.getElementById("srp").innerHTML = spr;
                    os.onclick = function(){
                        aa.classList.add('d-none');
                        bb.classList.add('d-none');
                        cc.classList.add('d-none');
                        dd.classList.add('d-none');
                        os.classList.add('d-none');
                        yazidiv.style.visibility = 'hidden';
                        sada.style.visibility = 'hidden';

                        if(sordur=sorular[3]=d){
                    }
                    if(srp.innerHTML == 4){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'TAM PUAN';
                    }
                    else if(srp.innerHTML == 3){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA USTU';
                    }
                    else if(srp.innerHTML == 2){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA';
                    }
                    else if(srp.innerHTML <= 1){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'REZALET';
                    }
                    }
                    aa.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    bb.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    cc.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    dd.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                }
                dd.onclick = function(){
                    dc.classList.remove('d-none');
                    os.classList.remove('d-none');
                    spr++;
                    document.getElementById("srp").innerHTML = spr;
                    os.onclick = function(){
                        aa.classList.add('d-none');
                        bb.classList.add('d-none');
                        cc.classList.add('d-none');
                        dd.classList.add('d-none');
                        os.classList.add('d-none');
                        yazidiv.style.visibility = 'hidden';
                        sada.style.visibility = 'hidden';

                        if(sordur=sorular[3]=d){
                    }
                    if(srp.innerHTML == 4){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'TAM PUAN';
                    }
                    else if(srp.innerHTML == 3){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA USTU';
                    }
                    else if(srp.innerHTML == 2){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'ORTALAMA';
                    }
                    else if(srp.innerHTML <= 1){
                        pd.style.visibility = 'visible';
                        pd1.style.visibility = 'visible';
                        pd2.style.visibility = 'visible';
                        pd2.innerHTML = 'REZALET';
                    }
                    }
                    aa.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    bb.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    cc.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                    dd.onclick = function(){
                        alert('Bir kere secim yapabilirsiniz')
                    }
                }
            }
        }
}
