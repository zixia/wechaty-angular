import { OnInit, OnDestroy } from '@angular/core';
import { RouterConfig, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brolog } from 'brolog';
import { WechatyComponent, ScanInfo, UserInfo } from '../wechaty.component/index';
import { AuthService } from '../auth.service/index';
export declare class BotComponent implements OnInit, OnDestroy {
    private route;
    private log;
    private authService;
    id: number;
    token: string;
    messages: string[];
    scan: ScanInfo;
    user: UserInfo;
    hbCounter: number;
    routeSub: Subscription;
    authSub: Subscription;
    constructor(route: ActivatedRoute, log: Brolog, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMessage(e: any): void;
    onHeartbeat(e: any): void;
    onScan(scan: ScanInfo): void;
    onLogin(user: UserInfo): void;
    onLogout(e: UserInfo): void;
    reset(wechaty: WechatyComponent): void;
    shutdown(wechaty: WechatyComponent): void;
}
export declare const BotRoutes: RouterConfig;