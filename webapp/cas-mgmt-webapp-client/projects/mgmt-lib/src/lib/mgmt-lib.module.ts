import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceIdComponent} from './form/service-id/service-id.component';
import {InvalidDomainDirective} from './form/service-id/invalid-domain.directive';
import {FormsModule} from '@angular/forms';
import {ServicedescComponent} from './form/servicedesc/servicedesc.component';
import {ServicetypeComponent} from './form/servicetype/servicetype.component';
import {ServicenameComponent} from './form/servicename/servicename.component';
import {LinkrefsComponent} from './form/linkrefs/linkrefs.component';
import {LogoComponent} from './form/logo/logo.component';
import {AccessStrategyModule} from './form/access-strategy/access-strategy.module';
import {SharedModule} from './shared/shared.module';
import {AttributeReleaseModule} from './form/attribute-release/attribute-release.module';
import {WsfedattrrelpoliciesModule} from './form/wsfedattrrelpolocies/wsfedattrrelpolicies.module';
import {UnknownComponent} from './unknown/unknown.component';
import {ContactsComponent} from './form/contacts/contacts.component';
import {EnabledComponent} from './form/enabled/enabled.component';
import {EvalorderComponent} from './form/evalorder/evalorder.component';
import {ExpirationComponent} from './form/expiration/expiration.component';
import {LogoutComponent} from './form/logout/logout.component';
import {LogouttypeevalComponent} from './form/logouttypeeval/logouttypeeval.component';
import {MfaModule} from './form/mfa/mfa.module';
import {OauthclientComponent} from './form/oauthclient/oauthclient.component';
import {OidcclientComponent} from './form/oidcclient/oidcclient.component';
import {PropertiespaneComponent} from './form/propertiespane/propertiespane.component';
import {ProxyComponent} from './form/proxy/proxy.component';
import {PubkeyComponent} from './form/pubkey/pubkey.component';
import {RequiredHandlersComponent} from './form/reqhandlers/reqhandlers.component';
import {ResponsetypeComponent} from './form/responsetype/responsetype.component';
import {SamlMetadataComponent} from './form/samlclient/metadata/metadata.component';
import {SamlNameidComponent} from './form/samlclient/nameid/nameid.component';
import {SamlOptionalComponent} from './form/samlclient/optional/optional.component';
import {SamlSecurityComponent} from './form/samlclient/security/security.component';
import {SamlservicespaneComponent} from './form/samlservicespane/samlservicespane.component';
import {ThemeidComponent} from './form/themeid/themeid.component';
import {UidattrsModule} from './form/uidattrs/uidattrs.module';
import {WsfedclientComponent} from './form/wsfedclient/wsfedclient.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AccessStrategyModule,
    AttributeReleaseModule,
    WsfedattrrelpoliciesModule,
    MfaModule,
    UidattrsModule
  ],
  declarations: [
    ServiceIdComponent,
    ServicedescComponent,
    ServicetypeComponent,
    ServicenameComponent,
    LinkrefsComponent,
    LogoComponent,
    InvalidDomainDirective,
    UnknownComponent,
    ContactsComponent,
    EnabledComponent,
    EvalorderComponent,
    ExpirationComponent,
    LogoutComponent,
    LogouttypeevalComponent,
    OauthclientComponent,
    OidcclientComponent,
    PropertiespaneComponent,
    ProxyComponent,
    PubkeyComponent,
    RequiredHandlersComponent,
    ResponsetypeComponent,
    SamlMetadataComponent,
    SamlNameidComponent,
    SamlOptionalComponent,
    SamlSecurityComponent,
    SamlservicespaneComponent,
    ThemeidComponent,
    WsfedclientComponent,
  ],
  exports: [
    ServiceIdComponent,
    ServicedescComponent,
    ServicetypeComponent,
    ServicenameComponent,
    LinkrefsComponent,
    LogoComponent,
    InvalidDomainDirective,
    AccessStrategyModule,
    AttributeReleaseModule,
    WsfedattrrelpoliciesModule,
    UnknownComponent,
    ContactsComponent,
    EnabledComponent,
    EvalorderComponent,
    ExpirationComponent,
    LogoutComponent,
    LogouttypeevalComponent,
    MfaModule,
    OauthclientComponent,
    OidcclientComponent,
    PropertiespaneComponent,
    ProxyComponent,
    PubkeyComponent,
    RequiredHandlersComponent,
    ResponsetypeComponent,
    SamlMetadataComponent,
    SamlNameidComponent,
    SamlOptionalComponent,
    SamlSecurityComponent,
    SamlservicespaneComponent,
    ThemeidComponent,
    UidattrsModule,
    WsfedclientComponent,
  ]
})
export class MgmtLibModule { }