import {
  DomSanitizer
} from "./chunk-IJ723KUQ.js";
import "./chunk-DEUKAPQG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-EAXSKJ27.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  assertInInjectionContext,
  inject,
  runInInjectionContext,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LUCK76G5.js";
import "./chunk-I74UQOMN.js";
import "./chunk-VWZL6L3B.js";
import {
  Observable,
  Subject,
  bufferCount,
  combineLatest,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  timer
} from "./chunk-FTNLKMS3.js";
import "./chunk-J2SOPSV6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ENBES6XL.js";

// node_modules/ngx-awesome-uploader/node_modules/mrmime/index.mjs
var mimes = {
  "ez": "application/andrew-inset",
  "aw": "application/applixware",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "dwd": "application/atsc-dwd+xml",
  "held": "application/atsc-held+xml",
  "rsat": "application/atsc-rsat+xml",
  "bdoc": "application/bdoc",
  "xcs": "application/calendar+xml",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cu": "application/cu-seeme",
  "mpd": "application/dash+xml",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "dssc": "application/dssc+der",
  "xdssc": "application/dssc+xml",
  "es": "application/ecmascript",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "epub": "application/epub+zip",
  "exi": "application/exi",
  "fdt": "application/fdt+xml",
  "pfr": "application/font-tdpfr",
  "geojson": "application/geo+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "hjson": "application/hjson",
  "stk": "application/hyperstudio",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "its": "application/its+xml",
  "jar": "application/java-archive",
  "war": "application/java-archive",
  "ear": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "application/javascript",
  "mjs": "application/javascript",
  "json": "application/json",
  "map": "application/json",
  "json5": "application/json5",
  "jsonml": "application/jsonml+json",
  "jsonld": "application/ld+json",
  "lgr": "application/lgr+xml",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mads": "application/mads+xml",
  "webmanifest": "application/manifest+json",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ma": "application/mathematica",
  "nb": "application/mathematica",
  "mb": "application/mathematica",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mscml": "application/mediaservercontrol+xml",
  "metalink": "application/metalink+xml",
  "meta4": "application/metalink4+xml",
  "mets": "application/mets+xml",
  "maei": "application/mmt-aei+xml",
  "musd": "application/mmt-usd+xml",
  "mods": "application/mods+xml",
  "m21": "application/mp21",
  "mp21": "application/mp21",
  "mp4s": "application/mp4",
  "m4p": "application/mp4",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "cjs": "application/node",
  "bin": "application/octet-stream",
  "dms": "application/octet-stream",
  "lrf": "application/octet-stream",
  "mar": "application/octet-stream",
  "so": "application/octet-stream",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "pkg": "application/octet-stream",
  "bpk": "application/octet-stream",
  "dump": "application/octet-stream",
  "elc": "application/octet-stream",
  "deploy": "application/octet-stream",
  "exe": "application/octet-stream",
  "dll": "application/octet-stream",
  "deb": "application/octet-stream",
  "dmg": "application/octet-stream",
  "iso": "application/octet-stream",
  "img": "application/octet-stream",
  "msi": "application/octet-stream",
  "msp": "application/octet-stream",
  "msm": "application/octet-stream",
  "buffer": "application/octet-stream",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "onetmp": "application/onenote",
  "onepkg": "application/onenote",
  "oxps": "application/oxps",
  "relo": "application/p2p-overlay+xml",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "asc": "application/pgp-signature",
  "sig": "application/pgp-signature",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7m": "application/pkcs7-mime",
  "p7c": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "ac": "application/pkix-attr-cert",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "ai": "application/postscript",
  "eps": "application/postscript",
  "ps": "application/postscript",
  "provx": "application/provenance+xml",
  "cww": "application/prs.cww",
  "pskcxml": "application/pskc+xml",
  "raml": "application/raml+yaml",
  "rdf": "application/rdf+xml",
  "owl": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rapd": "application/route-apd+xml",
  "sls": "application/route-s-tsid+xml",
  "rusd": "application/route-usd+xml",
  "gbr": "application/rpki-ghostbusters",
  "mft": "application/rpki-manifest",
  "roa": "application/rpki-roa",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "siv": "application/sieve",
  "sieve": "application/sieve",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "sru": "application/sru+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "swidtag": "application/swid+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "tfi": "application/thraud+xml",
  "tsd": "application/timestamped-data",
  "toml": "application/toml",
  "trig": "application/trig",
  "ttml": "application/ttml+xml",
  "ubj": "application/ubjson",
  "rsheet": "application/urc-ressheet+xml",
  "td": "application/urc-targetdesc+xml",
  "vxml": "application/voicexml+xml",
  "wasm": "application/wasm",
  "wgt": "application/widget",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xdf": "application/xcap-diff+xml",
  "xel": "application/xcap-el+xml",
  "xns": "application/xcap-ns+xml",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xlf": "application/xliff+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "xsd": "application/xml",
  "rng": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "mxml": "application/xv+xml",
  "xhvml": "application/xv+xml",
  "xvml": "application/xv+xml",
  "xvm": "application/xv+xml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "zip": "application/zip",
  "3gpp": "video/3gpp",
  "adp": "audio/adpcm",
  "amr": "audio/amr",
  "au": "audio/basic",
  "snd": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "kar": "audio/midi",
  "rmi": "audio/midi",
  "mxmf": "audio/mobile-xmf",
  "mp3": "audio/mpeg",
  "m4a": "audio/mp4",
  "mp4a": "audio/mp4",
  "mpga": "audio/mpeg",
  "mp2": "audio/mpeg",
  "mp2a": "audio/mpeg",
  "m2a": "audio/mpeg",
  "m3a": "audio/mpeg",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "spx": "audio/ogg",
  "opus": "audio/ogg",
  "s3m": "audio/s3m",
  "sil": "audio/silk",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "xm": "audio/xm",
  "ttc": "font/collection",
  "otf": "font/otf",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "exr": "image/aces",
  "apng": "image/apng",
  "avif": "image/avif",
  "bmp": "image/bmp",
  "cgm": "image/cgm",
  "drle": "image/dicom-rle",
  "emf": "image/emf",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "hsj2": "image/hsj2",
  "ief": "image/ief",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpg2": "image/jp2",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "jpe": "image/jpeg",
  "jph": "image/jph",
  "jhc": "image/jphc",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "jpf": "image/jpx",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "png": "image/png",
  "btif": "image/prs.btif",
  "pti": "image/prs.pti",
  "sgi": "image/sgi",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "t38": "image/t38",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "tfx": "image/tiff-fx",
  "webp": "image/webp",
  "wmf": "image/wmf",
  "disposition-notification": "message/disposition-notification",
  "u8msg": "message/global",
  "u8dsn": "message/global-delivery-status",
  "u8mdn": "message/global-disposition-notification",
  "u8hdr": "message/global-headers",
  "eml": "message/rfc822",
  "mime": "message/rfc822",
  "3mf": "model/3mf",
  "gltf": "model/gltf+json",
  "glb": "model/gltf-binary",
  "igs": "model/iges",
  "iges": "model/iges",
  "msh": "model/mesh",
  "mesh": "model/mesh",
  "silo": "model/mesh",
  "mtl": "model/mtl",
  "obj": "model/obj",
  "stpz": "model/step+zip",
  "stpxz": "model/step-xml+zip",
  "stl": "model/stl",
  "wrl": "model/vrml",
  "vrml": "model/vrml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3d": "model/x3d+xml",
  "x3dz": "model/x3d+xml",
  "appcache": "text/cache-manifest",
  "manifest": "text/cache-manifest",
  "ics": "text/calendar",
  "ifb": "text/calendar",
  "coffee": "text/coffeescript",
  "litcoffee": "text/coffeescript",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "shtml": "text/html",
  "jade": "text/jade",
  "jsx": "text/jsx",
  "less": "text/less",
  "markdown": "text/markdown",
  "md": "text/markdown",
  "mml": "text/mathml",
  "mdx": "text/mdx",
  "n3": "text/n3",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "list": "text/plain",
  "log": "text/plain",
  "in": "text/plain",
  "ini": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "sgml": "text/sgml",
  "sgm": "text/sgml",
  "shex": "text/shex",
  "slim": "text/slim",
  "slm": "text/slim",
  "spdx": "text/spdx",
  "stylus": "text/stylus",
  "styl": "text/stylus",
  "tsv": "text/tab-separated-values",
  "t": "text/troff",
  "tr": "text/troff",
  "roff": "text/troff",
  "man": "text/troff",
  "me": "text/troff",
  "ms": "text/troff",
  "ttl": "text/turtle",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vtt": "text/vtt",
  "yaml": "text/yaml",
  "yml": "text/yaml",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "m4s": "video/iso.segment",
  "jpgv": "video/jpeg",
  "jpgm": "image/jpm",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "webm": "video/webm"
};
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/ngx-awesome-uploader/fesm2022/ngx-awesome-uploader.mjs
function FileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "ngx-cloud-icon", 5);
    ɵɵelementStart(2, "div", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 8);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.title, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.or, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.browse, " ");
  }
}
var _c0 = ["*"];
var _c1 = "[_nghost-%COMP%]{display:block;cursor:pointer}svg[_ngcontent-%COMP%]{fill:#95a5a6}";
function FilePreviewItemComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17)(1, "img", 18);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_div_2_Template_img_click_1_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.imageClicked.next(ctx_r9.fileItem));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r2.safeUrl, ɵɵsanitizeUrl);
  }
}
function FilePreviewItemComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r3.fileItem.fileName.split(".").pop());
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.fileType, " ");
  }
}
function FilePreviewItemComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.niceBytes(ctx_r4.fileItem.file == null ? null : ctx_r4.fileItem.file.size));
  }
}
function FilePreviewItemComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "span", 22);
    ɵɵelementEnd();
  }
}
function FilePreviewItemComponent_div_0_ngx_refresh_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-refresh-icon", 23);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_ngx_refresh_icon_12_Template_ngx_refresh_icon_click_0_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.onRetry());
    });
    ɵɵelementEnd();
  }
}
function FilePreviewItemComponent_div_0_a_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "a", 24);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r7.captions == null ? null : ctx_r7.captions.previewCard == null ? null : ctx_r7.captions.previewCard.uploadError);
  }
}
var _c2 = (a0) => ({
  width: a0
});
function FilePreviewItemComponent_div_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 25);
    ɵɵelement(2, "div", 26);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 27)(4, "div", 28);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c2, ctx_r8.uploadProgress + "%"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r8.uploadProgress, " %");
  }
}
var _c3 = (a0) => ({
  "visually-hidden": a0
});
function FilePreviewItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵtemplate(2, FilePreviewItemComponent_div_0_div_2_Template, 2, 1, "div", 4)(3, FilePreviewItemComponent_div_0_div_3_Template, 2, 2, "div", 5);
    ɵɵelement(4, "div", 6);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 7)(6, "a", 8)(7, "p");
    ɵɵtext(8);
    ɵɵelementEnd()();
    ɵɵtemplate(9, FilePreviewItemComponent_div_0_div_9_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 10);
    ɵɵtemplate(11, FilePreviewItemComponent_div_0_div_11_Template, 2, 0, "div", 11)(12, FilePreviewItemComponent_div_0_ngx_refresh_icon_12_Template, 1, 0, "ngx-refresh-icon", 12);
    ɵɵelementStart(13, "a", 13);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_Template_a_click_13_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onRemove(ctx_r13.fileItem));
    });
    ɵɵelement(14, "ngx-close-icon", 14);
    ɵɵelementEnd()();
    ɵɵtemplate(15, FilePreviewItemComponent_div_0_a_15_Template, 1, 1, "a", 15)(16, FilePreviewItemComponent_div_0_ng_container_16_Template, 6, 4, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c3, ctx_r0.itemTemplate));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isImageFile && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isImageFile || !(ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(3);
    ɵɵproperty("title", ctx_r0.fileItem.fileName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.fileItem.fileName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.uploadError && !ctx_r0.uploadProgress && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.uploadError);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r0.captions == null ? null : ctx_r0.captions.previewCard == null ? null : ctx_r0.captions.previewCard.remove);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.uploadError && !ctx_r0.uploadProgress);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.uploadProgress);
  }
}
function FilePreviewItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c4 = (a0, a1) => ({
  fileItem: a0,
  uploadProgress: a1
});
var _c5 = (a0) => ({
  visibility: a0
});
function FilePreviewContainerComponent_ngx_preview_lightbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-preview-lightbox", 2);
    ɵɵlistener("previewClose", function FilePreviewContainerComponent_ngx_preview_lightbox_0_Template_ngx_preview_lightbox_previewClose_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closeLightbox());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("file", ctx_r0.lightboxFile);
  }
}
function FilePreviewContainerComponent_ngx_file_preview_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-file-preview-item", 3);
    ɵɵlistener("removeFile", function FilePreviewContainerComponent_ngx_file_preview_item_1_Template_ngx_file_preview_item_removeFile_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.removeFile.next($event));
    })("uploadSuccess", function FilePreviewContainerComponent_ngx_file_preview_item_1_Template_ngx_file_preview_item_uploadSuccess_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.uploadSuccess.next($event));
    })("uploadFail", function FilePreviewContainerComponent_ngx_file_preview_item_1_Template_ngx_file_preview_item_uploadFail_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.uploadFail.next($event));
    })("imageClicked", function FilePreviewContainerComponent_ngx_file_preview_item_1_Template_ngx_file_preview_item_imageClicked_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.openLightbox($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("fileItem", file_r4)("itemTemplate", ctx_r1.itemTemplate)("adapter", ctx_r1.adapter)("captions", ctx_r1.captions)("enableAutoUpload", ctx_r1.enableAutoUpload);
  }
}
function FilePickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function FilePickerComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r5);
      ɵɵnextContext();
      const _r1 = ɵɵreference(2);
      return ɵɵresetView(_r1.click());
    });
    ɵɵelementStart(1, "ngx-file-drop", 7);
    ɵɵlistener("fileDrop", function FilePickerComponent_div_0_Template_ngx_file_drop_fileDrop_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.dropped($event));
    });
    ɵɵprojection(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("customstyle", "custom-drag")("captions", ctx_r0.captions);
  }
}
var _c6 = (a0) => ({
  "is-loading": a0
});
function FilePickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "img", 10);
    ɵɵlistener("load", function FilePickerComponent_div_3_Template_img_load_2_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.cropperImgLoaded());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 11)(4, "button", 12);
    ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_4_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onCropSubmit());
    });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_6_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.closeCropper({
        file: ctx_r10.currentCropperFile,
        fileName: ctx_r10.currentCropperFile.name
      }));
    });
    ɵɵtext(7);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r2.safeCropImgUrl, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r2.isCroppingBusy)("ngClass", ɵɵpureFunction1(5, _c6, ctx_r2.isCroppingBusy));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.crop, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.cancel, " ");
  }
}
function FilePickerComponent_ngx_file_preview_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-file-preview-container", 14);
    ɵɵlistener("removeFile", function FilePickerComponent_ngx_file_preview_container_5_Template_ngx_file_preview_container_removeFile_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.removeFile($event));
    })("uploadSuccess", function FilePickerComponent_ngx_file_preview_container_5_Template_ngx_file_preview_container_uploadSuccess_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onUploadSuccess($event));
    })("uploadFail", function FilePickerComponent_ngx_file_preview_container_5_Template_ngx_file_preview_container_uploadFail_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onUploadFail($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("previewFiles", ctx_r3.files)("adapter", ctx_r3.adapter)("itemTemplate", ctx_r3.itemTemplate)("captions", ctx_r3.captions)("enableAutoUpload", ctx_r3.enableAutoUpload);
  }
}
var _c7 = [[["", 8, "dropzonetemplate"]]];
var _c8 = [".dropzoneTemplate"];
var _FilePickerService = class _FilePickerService {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  mockUploadFile(formData) {
    console.log(formData);
    const event = new CustomEvent("customevent", {
      detail: {
        type: "UploadProgreess"
      }
    });
    return of(event.detail);
  }
  // @ts-expect-error: Not all code paths return a value
  createSafeUrl(file) {
    try {
      const url = window.URL.createObjectURL(file);
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      return safeUrl;
    } catch (er) {
      console.log(er);
    }
  }
};
_FilePickerService.ɵfac = function FilePickerService_Factory(t) {
  return new (t || _FilePickerService)(ɵɵinject(DomSanitizer));
};
_FilePickerService.ɵprov = ɵɵdefineInjectable({
  token: _FilePickerService,
  factory: _FilePickerService.ɵfac
});
var FilePickerService = _FilePickerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePickerService, [{
    type: Injectable
  }], () => [{
    type: DomSanitizer
  }], null);
})();
function getFileCategoryType(fileExtension) {
  if (fileExtension.includes("image")) {
    return "image";
  } else if (fileExtension.includes("video")) {
    return "video";
  } else {
    return "other";
  }
}
function getFileType(name) {
  return name.split(".").pop().toUpperCase();
}
function isImageFile(fileType) {
  const IMAGE_TYPES = ["PNG", "JPG", "JPEG", "BMP", "WEBP", "JFIF", "TIFF"];
  return IMAGE_TYPES.includes(fileType.toUpperCase());
}
var FileValidationTypes;
(function(FileValidationTypes2) {
  FileValidationTypes2["fileMaxSize"] = "FILE_MAX_SIZE";
  FileValidationTypes2["fileMaxCount"] = "FILE_MAX_COUNT";
  FileValidationTypes2["totalMaxSize"] = "TOTAL_MAX_SIZE";
  FileValidationTypes2["extensions"] = "EXTENSIONS";
  FileValidationTypes2["uploadType"] = "UPLOAD_TYPE";
  FileValidationTypes2["customValidator"] = "CUSTOM_VALIDATOR";
})(FileValidationTypes || (FileValidationTypes = {}));
var DefaultCaptions = {
  dropzone: {
    title: "Drag and drop file here",
    or: "or",
    browse: "Browse Files"
  },
  cropper: {
    crop: "Crop",
    cancel: "Cancel"
  },
  previewCard: {
    remove: "Remove",
    uploadError: "Error on upload"
  }
};
var DEFAULT_CROPPER_OPTIONS = {
  dragMode: "crop",
  aspectRatio: 1,
  autoCrop: true,
  movable: true,
  zoomable: true,
  scalable: true,
  autoCropArea: 0.8
};
function bitsToMB(size) {
  return parseFloat(size.toString()) / 1048576;
}
var _FileValidatorService = class _FileValidatorService {
  /** Validates file extension */
  isValidExtension(fileName, fileExtensions) {
    if (!fileExtensions?.length) {
      return true;
    }
    const extension = fileName.split(".").pop();
    const fileExtensionsLowercase = fileExtensions.map((ext) => ext.toLowerCase());
    if (fileExtensionsLowercase.indexOf(extension.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  /** Validates if upload type is single so another file cannot be added */
  isValidUploadType(files, uploadType) {
    if (uploadType === "single" && files?.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  /** Validates max file count */
  isValidMaxFileCount(fileMaxCount, newFiles, files) {
    if (!fileMaxCount || fileMaxCount >= files?.length + newFiles?.length) {
      return true;
    } else {
      return false;
    }
  }
  isValidFileSize(size, fileMaxSize) {
    const fileMB = bitsToMB(size);
    if (!fileMaxSize || fileMaxSize && fileMB < fileMaxSize) {
      return true;
    } else {
      return false;
    }
  }
  isValidTotalFileSize(newFile, files, totalMaxSize) {
    const totalBits = files.map((f) => f.file ? f.file.size : 0).reduce((acc, curr) => acc + curr, 0);
    if (!totalMaxSize || totalMaxSize && bitsToMB(totalBits + newFile.size) < totalMaxSize) {
      return true;
    } else {
      return false;
    }
  }
};
_FileValidatorService.ɵfac = function FileValidatorService_Factory(t) {
  return new (t || _FileValidatorService)();
};
_FileValidatorService.ɵprov = ɵɵdefineInjectable({
  token: _FileValidatorService,
  factory: _FileValidatorService.ɵfac,
  providedIn: "root"
});
var FileValidatorService = _FileValidatorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileValidatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UploadFile = class {
  constructor(relativePath, fileEntry) {
    this.relativePath = relativePath;
    this.fileEntry = fileEntry;
  }
};
var UploadEvent = class {
  constructor(files) {
    this.files = files;
  }
};
var _CloudIconComponent = class _CloudIconComponent {
};
_CloudIconComponent.ɵfac = function CloudIconComponent_Factory(t) {
  return new (t || _CloudIconComponent)();
};
_CloudIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _CloudIconComponent,
  selectors: [["ngx-cloud-icon"]],
  decls: 3,
  vars: 0,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "42px", "height", "42px", 1, "svg-icon"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"]],
  template: function CloudIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "path", 1)(2, "path", 2);
      ɵɵelementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:.4em}.svg-icon[_ngcontent-%COMP%]{fill:#95a5a6}"],
  changeDetection: 0
});
var CloudIconComponent = _CloudIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudIconComponent, [{
    type: Component,
    args: [{
      selector: "ngx-cloud-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<!-- <div class="cloud-upload-icon"><i></i></div> -->\r\n\r\n<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42px" height="42px">\r\n  <path d="M0 0h24v24H0z" fill="none" />\r\n  <path\r\n    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"\r\n  />\r\n</svg>\r\n',
      styles: [":host{display:flex;align-items:center;justify-content:center;margin-bottom:.4em}.svg-icon{fill:#95a5a6}\n"]
    }]
  }], null, null);
})();
var _FileComponent = class _FileComponent {
  constructor(zone, renderer) {
    this.zone = zone;
    this.renderer = renderer;
    this.customstyle = null;
    this.disableIf = false;
    this.fileDrop = new EventEmitter();
    this.fileOver = new EventEmitter();
    this.fileLeave = new EventEmitter();
    this.stack = [];
    this.files = [];
    this.dragoverflag = false;
    this.globalDisable = false;
    this.numOfActiveReadEntries = 0;
    if (!this.customstyle) {
      this.customstyle = "drop-zone";
    }
    this.globalStart = this.renderer.listen("document", "dragstart", () => {
      this.globalDisable = true;
    });
    this.globalEnd = this.renderer.listen("document", "dragend", () => {
      this.globalDisable = false;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.globalStart();
    this.globalEnd();
  }
  onDragOver(event) {
    if (!this.globalDisable && !this.disableIf) {
      if (!this.dragoverflag) {
        this.dragoverflag = true;
        this.fileOver.emit(event);
      }
      this.preventAndStop(event);
    }
  }
  onDragLeave(event) {
    if (!this.globalDisable && !this.disableIf) {
      if (this.dragoverflag) {
        this.dragoverflag = false;
        this.fileLeave.emit(event);
      }
      this.preventAndStop(event);
    }
  }
  dropFiles(event) {
    if (!this.globalDisable && !this.disableIf) {
      this.dragoverflag = false;
      event.dataTransfer.dropEffect = "copy";
      let length;
      if (event.dataTransfer.items) {
        length = event.dataTransfer.items.length;
      } else {
        length = event.dataTransfer.files.length;
      }
      for (let i = 0; i < length; i++) {
        let entry;
        if (event.dataTransfer.items) {
          if (event.dataTransfer.items[i].webkitGetAsEntry) {
            entry = event.dataTransfer.items[i].webkitGetAsEntry();
          }
        } else {
          if (event.dataTransfer.files[i].webkitGetAsEntry) {
            entry = event.dataTransfer.files[i].webkitGetAsEntry();
          }
        }
        if (!entry) {
          const file = event.dataTransfer.files[i];
          if (file) {
            const fakeFileEntry = {
              name: file.name,
              isDirectory: false,
              isFile: true,
              file: (callback) => {
                callback(file);
              }
            };
            const toUpload = new UploadFile(fakeFileEntry.name, fakeFileEntry);
            this.addToQueue(toUpload);
          }
        } else {
          if (entry.isFile) {
            const toUpload = new UploadFile(entry.name, entry);
            this.addToQueue(toUpload);
          } else if (entry.isDirectory) {
            this.traverseFileTree(entry, entry.name);
          }
        }
      }
      this.preventAndStop(event);
      const timerObservable = timer(200, 200);
      this.subscription = timerObservable.subscribe(() => {
        if (this.files.length > 0 && this.numOfActiveReadEntries === 0) {
          this.fileDrop.emit(new UploadEvent(this.files));
          this.files = [];
        }
      });
    }
  }
  traverseFileTree(item, path) {
    if (item.isFile) {
      const toUpload = new UploadFile(path, item);
      this.files.push(toUpload);
      this.zone.run(() => {
        this.popToStack();
      });
    } else {
      this.pushToStack(path);
      path = path + "/";
      const dirReader = item.createReader();
      let entries = [];
      const thisObj = this;
      const readEntries = () => {
        thisObj.numOfActiveReadEntries++;
        dirReader.readEntries((res) => {
          if (!res.length) {
            if (entries.length === 0) {
              const toUpload = new UploadFile(path, item);
              thisObj.zone.run(() => {
                thisObj.addToQueue(toUpload);
              });
            } else {
              for (let i = 0; i < entries.length; i++) {
                thisObj.zone.run(() => {
                  thisObj.traverseFileTree(entries[i], path + entries[i].name);
                });
              }
            }
            thisObj.zone.run(() => {
              thisObj.popToStack();
            });
          } else {
            entries = entries.concat(res);
            readEntries();
          }
          thisObj.numOfActiveReadEntries--;
        });
      };
      readEntries();
    }
  }
  addToQueue(item) {
    this.files.push(item);
  }
  pushToStack(str) {
    this.stack.push(str);
  }
  popToStack() {
    const value = this.stack.pop();
  }
  clearQueue() {
    this.files = [];
  }
  preventAndStop(event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
_FileComponent.ɵfac = function FileComponent_Factory(t) {
  return new (t || _FileComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
_FileComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileComponent,
  selectors: [["ngx-file-drop"]],
  inputs: {
    captions: "captions",
    customstyle: "customstyle",
    disableIf: "disableIf"
  },
  outputs: {
    fileDrop: "fileDrop",
    fileOver: "fileOver",
    fileLeave: "fileLeave"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 4,
  consts: [["id", "dropZone", 3, "className", "drop", "dragover", "dragleave"], [1, "custom-dropzone"], ["ref", ""], ["class", "content", 4, "ngIf"], [1, "content"], [1, "cloud-icon"], [1, "content-top-text"], [1, "content-center-text"], ["type", "button", 1, "file-browse-button"]],
  template: function FileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("drop", function FileComponent_Template_div_drop_0_listener($event) {
        return ctx.dropFiles($event);
      })("dragover", function FileComponent_Template_div_dragover_0_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileComponent_Template_div_dragleave_0_listener($event) {
        return ctx.onDragLeave($event);
      });
      ɵɵelementStart(1, "div", 1, 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
      ɵɵtemplate(4, FileComponent_div_4_Template, 8, 3, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(2);
      ɵɵclassProp("over", ctx.dragoverflag);
      ɵɵproperty("className", ctx.customstyle);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", (_r0.children == null ? null : _r0.children.length) === 0);
    }
  },
  dependencies: [NgIf, CloudIconComponent],
  styles: ["[_nghost-%COMP%]{display:block;width:100%;padding:0 16px}#dropZone[_ngcontent-%COMP%]{max-width:440px;margin:auto;border:2px dashed #ecf0f1;border-radius:6px;padding:56px 0;background:#fff}.file-browse-button[_ngcontent-%COMP%]{padding:12px 18px;background:#7f8c8d;border:0;outline:0;font-size:14px;color:#fff;font-weight:700;border-radius:6px;cursor:pointer}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.over[_ngcontent-%COMP%]{background-color:#93939380}.content-top-text[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#5b5b7b}.content-center-text[_ngcontent-%COMP%]{color:#90a0bc;margin:12px 0;font-size:14px}"]
});
var FileComponent = _FileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileComponent, [{
    type: Component,
    args: [{
      selector: "ngx-file-drop",
      template: '<div\r\n  id="dropZone"\r\n  [className]="customstyle"\r\n  [class.over]="dragoverflag"\r\n  (drop)="dropFiles($event)"\r\n  (dragover)="onDragOver($event)"\r\n  (dragleave)="onDragLeave($event)"\r\n>\r\n  <div #ref class="custom-dropzone">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <div class="content" *ngIf="ref.children?.length === 0">\r\n    <ngx-cloud-icon class="cloud-icon"></ngx-cloud-icon>\r\n    <div class="content-top-text">\r\n      {{ captions?.dropzone?.title }}\r\n    </div>\r\n    <div class="content-center-text">\r\n      {{ captions?.dropzone?.or }}\r\n    </div>\r\n    <button class="file-browse-button" type="button">\r\n      {{ captions?.dropzone?.browse }}\r\n    </button>\r\n  </div>\r\n</div>\r\n',
      styles: [":host{display:block;width:100%;padding:0 16px}#dropZone{max-width:440px;margin:auto;border:2px dashed #ecf0f1;border-radius:6px;padding:56px 0;background:#fff}.file-browse-button{padding:12px 18px;background:#7f8c8d;border:0;outline:0;font-size:14px;color:#fff;font-weight:700;border-radius:6px;cursor:pointer}.content{display:flex;flex-direction:column;justify-content:center;align-items:center}.over{background-color:#93939380}.content-top-text{font-size:18px;font-weight:700;color:#5b5b7b}.content-center-text{color:#90a0bc;margin:12px 0;font-size:14px}\n"]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }], {
    captions: [{
      type: Input
    }],
    customstyle: [{
      type: Input
    }],
    disableIf: [{
      type: Input
    }],
    fileDrop: [{
      type: Output
    }],
    fileOver: [{
      type: Output
    }],
    fileLeave: [{
      type: Output
    }]
  });
})();
var UploadStatus;
(function(UploadStatus2) {
  UploadStatus2["UPLOADED"] = "UPLOADED";
  UploadStatus2["IN_PROGRESS"] = "IN PROGRESS";
  UploadStatus2["ERROR"] = "ERROR";
})(UploadStatus || (UploadStatus = {}));
var FilePickerAdapter = class {
};
var _RefreshIconComponent = class _RefreshIconComponent {
};
_RefreshIconComponent.ɵfac = function RefreshIconComponent_Factory(t) {
  return new (t || _RefreshIconComponent)();
};
_RefreshIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _RefreshIconComponent,
  selectors: [["ngx-refresh-icon"]],
  decls: 3,
  vars: 0,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"]],
  template: function RefreshIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "path", 1)(2, "path", 2);
      ɵɵelementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;cursor:pointer}svg[_ngcontent-%COMP%]{fill:#95a5a6}"],
  changeDetection: 0
});
var RefreshIconComponent = _RefreshIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshIconComponent, [{
    type: Component,
    args: [{
      selector: "ngx-refresh-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">\r\n  <path d="M0 0h24v24H0z" fill="none" />\r\n  <path\r\n    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\r\n  />\r\n</svg>\r\n',
      styles: [":host{display:block;cursor:pointer}svg{fill:#95a5a6}\n"]
    }]
  }], null, null);
})();
var _CloseIconComponent = class _CloseIconComponent {
};
_CloseIconComponent.ɵfac = function CloseIconComponent_Factory(t) {
  return new (t || _CloseIconComponent)();
};
_CloseIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _CloseIconComponent,
  selectors: [["ngx-close-icon"]],
  decls: 3,
  vars: 0,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],
  template: function CloseIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "path", 1)(2, "path", 2);
      ɵɵelementEnd();
    }
  },
  styles: [_c1],
  changeDetection: 0
});
var CloseIconComponent = _CloseIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseIconComponent, [{
    type: Component,
    args: [{
      selector: "ngx-close-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">\r\n  <path d="M0 0h24v24H0z" fill="none" />\r\n  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\r\n</svg>\r\n',
      styles: [":host{display:block;cursor:pointer}svg{fill:#95a5a6}\n"]
    }]
  }], null, null);
})();
var _FilePreviewItemComponent = class _FilePreviewItemComponent {
  constructor(fileService, changeRef) {
    this.fileService = fileService;
    this.changeRef = changeRef;
    this.removeFile = new EventEmitter();
    this.uploadSuccess = new EventEmitter();
    this.uploadFail = new EventEmitter();
    this.imageClicked = new EventEmitter();
  }
  ngOnInit() {
    if (this.fileItem.file) {
      this._uploadFile(this.fileItem);
      this.safeUrl = this.getSafeUrl(this.fileItem.file);
    }
    this.fileType = getFileType(this.fileItem.fileName);
    this.isImageFile = isImageFile(this.fileType);
  }
  getSafeUrl(file) {
    return this.fileService.createSafeUrl(file);
  }
  /** Converts bytes to nice size */
  niceBytes(x) {
    const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let l = 0;
    let n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }
  /** Retry file upload when upload was unsuccessfull */
  onRetry() {
    this.uploadError = void 0;
    this._uploadFile(this.fileItem);
  }
  onRemove(fileItem) {
    this._uploadUnsubscribe();
    this.removeFile.next(__spreadProps(__spreadValues({}, fileItem), {
      uploadResponse: this.uploadResponse || fileItem.uploadResponse
    }));
  }
  _uploadFile(fileItem) {
    if (!this.enableAutoUpload) {
      return;
    }
    if (this.adapter) {
      this._uploadSubscription = this.adapter.uploadFile(fileItem).subscribe((res) => {
        if (res && res.status === UploadStatus.UPLOADED) {
          this._onUploadSuccess(res.body, fileItem);
          this.uploadProgress = void 0;
        }
        if (res && res.status === UploadStatus.IN_PROGRESS) {
          this.uploadProgress = res.progress;
          this.changeRef.detectChanges();
        }
        if (res && res.status === UploadStatus.ERROR) {
          this.uploadError = true;
          this.uploadFail.next(res.body);
          this.uploadProgress = void 0;
        }
        this.changeRef.detectChanges();
      }, (er) => {
        this.uploadError = true;
        this.uploadFail.next(er);
        this.uploadProgress = void 0;
        this.changeRef.detectChanges();
      });
    } else {
      console.warn("no adapter was provided");
    }
  }
  /** Emits event when file upload api returns success  */
  _onUploadSuccess(uploadResponse, fileItem) {
    this.uploadResponse = uploadResponse;
    this.fileItem.uploadResponse = uploadResponse;
    this.uploadSuccess.next(__spreadProps(__spreadValues({}, fileItem), {
      uploadResponse
    }));
  }
  /** Cancel upload. Cancels request  */
  _uploadUnsubscribe() {
    if (this._uploadSubscription) {
      this._uploadSubscription.unsubscribe();
    }
  }
};
_FilePreviewItemComponent.ɵfac = function FilePreviewItemComponent_Factory(t) {
  return new (t || _FilePreviewItemComponent)(ɵɵdirectiveInject(FilePickerService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_FilePreviewItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _FilePreviewItemComponent,
  selectors: [["ngx-file-preview-item"]],
  inputs: {
    fileItem: "fileItem",
    adapter: "adapter",
    itemTemplate: "itemTemplate",
    captions: "captions",
    enableAutoUpload: "enableAutoUpload"
  },
  outputs: {
    removeFile: "removeFile",
    uploadSuccess: "uploadSuccess",
    uploadFail: "uploadFail",
    imageClicked: "imageClicked"
  },
  decls: 2,
  vars: 6,
  consts: [["class", "file-preview-wrapper", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-preview-wrapper", 3, "ngClass"], [1, "file-preview-thumbnail"], ["class", "img-preview-thumbnail", 4, "ngIf"], ["class", "other-preview-thumbnail", 3, "ngClass", 4, "ngIf"], [1, "thumbnail-backdrop"], [1, "file-preview-description"], ["href", "javascript:void(0)", 1, "file-preview-title", 3, "title"], ["class", "file-preview-size", 4, "ngIf"], [1, "file-preview-actions"], ["class", "ngx-checkmark-wrapper", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "ngx-close-icon-wrapper", 3, "title", "click"], [1, "ngx-close-icon"], ["class", "file-upload-error-wrapper", "href", "javascipt:void(0)", 3, "title", 4, "ngIf"], [4, "ngIf"], [1, "img-preview-thumbnail"], [3, "src", "click"], [1, "other-preview-thumbnail", 3, "ngClass"], [1, "file-preview-size"], [1, "ngx-checkmark-wrapper"], [1, "ngx-checkmark"], [3, "click"], ["href", "javascipt:void(0)", 1, "file-upload-error-wrapper", 3, "title"], [1, "file-upload-progress-bar-wrapper"], [1, "file-upload-progress-bar", 3, "ngStyle"], [1, "file-upload-percentage-wrapper"], [1, "file-upload-percentage"]],
  template: function FilePreviewItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, FilePreviewItemComponent_div_0_Template, 17, 13, "div", 0)(1, FilePreviewItemComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.fileItem);
      ɵɵadvance(1);
      ɵɵproperty("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c4, ctx.fileItem, ctx.uploadProgress));
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, RefreshIconComponent, CloseIconComponent],
  styles: ['[_nghost-%COMP%]{display:block;padding:20px 16px;border-bottom:1px solid #ebeef1;max-width:440px;position:relative}.visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.file-preview-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]{position:relative;z-index:2;cursor:pointer}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]{width:36px;height:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:6px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;justify-content:center;align-items:center;background:#706fd3;border-radius:4px;color:#fff;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.pdf[_ngcontent-%COMP%]{background:#e4394e}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.doc[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.docx[_ngcontent-%COMP%]{background:#2196f3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xls[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xlsx[_ngcontent-%COMP%]{background:#4caf50}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.txt[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.ppt[_ngcontent-%COMP%]{background:#ff9800}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:hidden;position:absolute;left:0;top:0;width:100%;height:100%;border-radius:6px;transition:all .1s ease-in-out;pointer-events:none;background:#2b384733}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:hover   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:active   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:visible;background:#2b384766}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding-left:16px;padding-right:16px;color:#74809d;overflow:hidden;flex:1;z-index:2;position:relative}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]{font-weight:700;width:90%;text-decoration:none;color:#74809d;cursor:default}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-overflow:ellipsis;max-width:100%;overflow:hidden;white-space:nowrap;margin:0}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-size[_ngcontent-%COMP%]{font-size:12px;color:#979fb8}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:10px;z-index:3;position:relative}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]{position:relative;cursor:pointer;font-size:22px;height:20px;width:20px;border-radius:50%;background:#43d084}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:19px;width:19px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;left:7px;top:4px;width:3px;height:7px;border:1px solid #ffffff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-close-icon-wrapper[_ngcontent-%COMP%]{border-radius:50%;padding:3px;margin-left:5px;cursor:pointer}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar-wrapper[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage-wrapper[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;height:95%;left:0;top:0;bottom:0;margin:auto}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar[_ngcontent-%COMP%]{background:#eef1fa;border-radius:6px;width:0%;height:95%;transition:width .3s ease-in}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage[_ngcontent-%COMP%]{padding-right:10%;color:#c2cdda;padding-top:5%;font-size:19px;text-align:right}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-error-wrapper[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;height:95%;left:0;top:0;bottom:0;margin:auto;background:#fe546f0f}'],
  changeDetection: 0
});
var FilePreviewItemComponent = _FilePreviewItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePreviewItemComponent, [{
    type: Component,
    args: [{
      selector: "ngx-file-preview-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="file-preview-wrapper" *ngIf="fileItem" [ngClass]="{ 'visually-hidden': itemTemplate }">\r
  <div class="file-preview-thumbnail">\r
    <div class="img-preview-thumbnail" *ngIf="isImageFile && fileItem?.file">\r
      <img [src]="safeUrl" (click)="imageClicked.next(fileItem)" />\r
    </div>\r
    <div\r
      class="other-preview-thumbnail"\r
      *ngIf="!isImageFile || !fileItem?.file"\r
      [ngClass]="fileItem.fileName.split('.').pop()"\r
    >\r
      {{ fileType }}\r
    </div>\r
    <div class="thumbnail-backdrop"></div>\r
  </div>\r
  <div class="file-preview-description">\r
    <a class="file-preview-title" [title]="fileItem.fileName" href="javascript:void(0)"\r
      ><p>{{ fileItem.fileName }}</p></a\r
    >\r
    <div class="file-preview-size" *ngIf="fileItem?.file">{{ niceBytes(fileItem.file?.size) }}</div>\r
  </div>\r
  <div class="file-preview-actions">\r
    <div class="ngx-checkmark-wrapper" *ngIf="!uploadError && !uploadProgress && fileItem?.file">\r
      <span class="ngx-checkmark"></span>\r
    </div>\r
    <ngx-refresh-icon *ngIf="uploadError" (click)="onRetry()"></ngx-refresh-icon>\r
    <a class="ngx-close-icon-wrapper" (click)="onRemove(fileItem)" title="{{ captions?.previewCard?.remove }}">\r
      <ngx-close-icon class="ngx-close-icon"></ngx-close-icon>\r
    </a>\r
  </div>\r
  <a\r
    class="file-upload-error-wrapper"\r
    *ngIf="uploadError && !uploadProgress"\r
    href="javascipt:void(0)"\r
    title="{{ captions?.previewCard?.uploadError }}"\r
  >\r
  </a>\r
\r
  <ng-container *ngIf="uploadProgress">\r
    <div class="file-upload-progress-bar-wrapper">\r
      <div class="file-upload-progress-bar" [ngStyle]="{ width: uploadProgress + '%' }"></div>\r
    </div>\r
\r
    <div class="file-upload-percentage-wrapper">\r
      <div class="file-upload-percentage">{{ uploadProgress }} %</div>\r
    </div>\r
  </ng-container>\r
</div>\r
\r
<ng-container *ngTemplateOutlet="itemTemplate; context: { fileItem: fileItem, uploadProgress: uploadProgress }">\r
</ng-container>\r
`,
      styles: [':host{display:block;padding:20px 16px;border-bottom:1px solid #ebeef1;max-width:440px;position:relative}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.file-preview-wrapper{display:flex;width:100%}.file-preview-wrapper .file-preview-thumbnail{position:relative;z-index:2;cursor:pointer}.file-preview-wrapper .file-preview-thumbnail .img-preview-thumbnail{width:36px;height:36px}.file-preview-wrapper .file-preview-thumbnail .img-preview-thumbnail img{width:100%;height:100%;object-fit:cover;border-radius:6px}.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail{width:36px;height:36px;display:flex;justify-content:center;align-items:center;background:#706fd3;border-radius:4px;color:#fff;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden}.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.pdf{background:#e4394e}.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.doc,.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.docx{background:#2196f3}.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.xls,.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.xlsx{background:#4caf50}.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.txt,.file-preview-wrapper .file-preview-thumbnail .other-preview-thumbnail.ppt{background:#ff9800}.file-preview-wrapper .file-preview-thumbnail .thumbnail-backdrop{visibility:hidden;position:absolute;left:0;top:0;width:100%;height:100%;border-radius:6px;transition:all .1s ease-in-out;pointer-events:none;background:#2b384733}.file-preview-wrapper .file-preview-thumbnail:hover .thumbnail-backdrop{visibility:visible}.file-preview-wrapper .file-preview-thumbnail:active .thumbnail-backdrop{visibility:visible;background:#2b384766}.file-preview-wrapper .file-preview-description{display:flex;flex-direction:column;align-items:flex-start;padding-left:16px;padding-right:16px;color:#74809d;overflow:hidden;flex:1;z-index:2;position:relative}.file-preview-wrapper .file-preview-description .file-preview-title{font-weight:700;width:90%;text-decoration:none;color:#74809d;cursor:default}.file-preview-wrapper .file-preview-description .file-preview-title p{text-overflow:ellipsis;max-width:100%;overflow:hidden;white-space:nowrap;margin:0}.file-preview-wrapper .file-preview-description .file-preview-size{font-size:12px;color:#979fb8}.file-preview-wrapper .file-preview-actions{display:flex;align-items:center;font-size:10px;z-index:3;position:relative}.file-preview-wrapper .file-preview-actions .ngx-checkmark-wrapper{position:relative;cursor:pointer;font-size:22px;height:20px;width:20px;border-radius:50%;background:#43d084}.file-preview-wrapper .file-preview-actions .ngx-checkmark-wrapper .ngx-checkmark{position:absolute;top:0;left:0;height:19px;width:19px}.file-preview-wrapper .file-preview-actions .ngx-checkmark-wrapper .ngx-checkmark:after{content:"";position:absolute;display:block;left:7px;top:4px;width:3px;height:7px;border:1px solid #ffffff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.file-preview-wrapper .file-preview-actions .ngx-close-icon-wrapper{border-radius:50%;padding:3px;margin-left:5px;cursor:pointer}.file-preview-wrapper .file-upload-progress-bar-wrapper,.file-preview-wrapper .file-upload-percentage-wrapper{position:absolute;z-index:1;width:100%;height:95%;left:0;top:0;bottom:0;margin:auto}.file-preview-wrapper .file-upload-progress-bar{background:#eef1fa;border-radius:6px;width:0%;height:95%;transition:width .3s ease-in}.file-preview-wrapper .file-upload-percentage{padding-right:10%;color:#c2cdda;padding-top:5%;font-size:19px;text-align:right}.file-preview-wrapper .file-upload-error-wrapper{position:absolute;z-index:1;width:100%;height:95%;left:0;top:0;bottom:0;margin:auto;background:#fe546f0f}\n']
    }]
  }], () => [{
    type: FilePickerService
  }, {
    type: ChangeDetectorRef
  }], {
    removeFile: [{
      type: Output
    }],
    uploadSuccess: [{
      type: Output
    }],
    uploadFail: [{
      type: Output
    }],
    imageClicked: [{
      type: Output
    }],
    fileItem: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    captions: [{
      type: Input
    }],
    enableAutoUpload: [{
      type: Input
    }]
  });
})();
var _PreviewLightboxComponent = class _PreviewLightboxComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.previewClose = new EventEmitter();
  }
  ngOnInit() {
    this.getSafeUrl(this.file.file);
  }
  getSafeUrl(file) {
    const url = window.URL.createObjectURL(file);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onClose() {
    this.previewClose.next();
  }
};
_PreviewLightboxComponent.ɵfac = function PreviewLightboxComponent_Factory(t) {
  return new (t || _PreviewLightboxComponent)(ɵɵdirectiveInject(DomSanitizer));
};
_PreviewLightboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _PreviewLightboxComponent,
  selectors: [["ngx-preview-lightbox"]],
  inputs: {
    file: "file"
  },
  outputs: {
    previewClose: "previewClose"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "ng-modal-backdrop", 3, "click"], [1, "ng-modal-content"], [1, "close-icon-wrapper", 3, "click"], [1, "lightbox-item"], [3, "src", "ngStyle", "load"]],
  template: function PreviewLightboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_0_listener() {
        return ctx.onClose();
      });
      ɵɵelementEnd();
      ɵɵelementStart(1, "div", 1)(2, "div", 2);
      ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_2_listener() {
        return ctx.onClose();
      });
      ɵɵelement(3, "ngx-close-icon");
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 3)(5, "img", 4);
      ɵɵlistener("load", function PreviewLightboxComponent_Template_img_load_5_listener() {
        return ctx.loaded = true;
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵproperty("src", ctx.safeUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction1(2, _c5, ctx.loaded ? "visible" : "hidden"));
    }
  },
  dependencies: [NgStyle, CloseIconComponent],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;z-index:1040;left:0;top:0;width:100vw;height:100vh;overflow:auto;overflow:hidden}.ng-modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1040;background:#00000049}.ng-modal-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:#000000de;z-index:1041}.ng-modal-content[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;font-size:20px}.ng-modal-content[_ngcontent-%COMP%]   .lightbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:calc(100vw - 30px);max-height:calc(100vh - 30px);width:100%;height:auto;object-fit:contain;animation-name:_ngcontent-%COMP%_zoomIn;animation-duration:.2s}@keyframes _ngcontent-%COMP%_zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}"],
  changeDetection: 0
});
var PreviewLightboxComponent = _PreviewLightboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewLightboxComponent, [{
    type: Component,
    args: [{
      selector: "ngx-preview-lightbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ng-modal-backdrop" (click)="onClose()"></div>\r
\r
<div class="ng-modal-content">\r
  <div class="close-icon-wrapper" (click)="onClose()">\r
    <ngx-close-icon></ngx-close-icon>\r
  </div>\r
  <div class="lightbox-item">\r
    <img [src]="safeUrl" (load)="loaded = true" [ngStyle]="{ visibility: loaded ? 'visible' : 'hidden' }" />\r
  </div>\r
</div>\r
`,
      styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;z-index:1040;left:0;top:0;width:100vw;height:100vh;overflow:auto;overflow:hidden}.ng-modal-backdrop{position:fixed;inset:0;z-index:1040;background:#00000049}.ng-modal-content{display:flex;justify-content:center;align-items:center;color:#000000de;z-index:1041}.ng-modal-content .close-icon-wrapper{position:absolute;top:20px;right:20px;font-size:20px}.ng-modal-content .lightbox-item img{max-width:calc(100vw - 30px);max-height:calc(100vh - 30px);width:100%;height:auto;object-fit:contain;animation-name:zoomIn;animation-duration:.2s}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}\n"]
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    file: [{
      type: Input
    }],
    previewClose: [{
      type: Output
    }]
  });
})();
var _FilePreviewContainerComponent = class _FilePreviewContainerComponent {
  constructor() {
    this.removeFile = new EventEmitter();
    this.uploadSuccess = new EventEmitter();
    this.uploadFail = new EventEmitter();
  }
  openLightbox(file) {
    this.lightboxFile = file;
  }
  closeLightbox() {
    this.lightboxFile = void 0;
  }
};
_FilePreviewContainerComponent.ɵfac = function FilePreviewContainerComponent_Factory(t) {
  return new (t || _FilePreviewContainerComponent)();
};
_FilePreviewContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _FilePreviewContainerComponent,
  selectors: [["ngx-file-preview-container"]],
  inputs: {
    previewFiles: "previewFiles",
    itemTemplate: "itemTemplate",
    enableAutoUpload: "enableAutoUpload",
    adapter: "adapter",
    captions: "captions"
  },
  outputs: {
    removeFile: "removeFile",
    uploadSuccess: "uploadSuccess",
    uploadFail: "uploadFail"
  },
  decls: 2,
  vars: 2,
  consts: [[3, "file", "previewClose", 4, "ngIf"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked", 4, "ngFor", "ngForOf"], [3, "file", "previewClose"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked"]],
  template: function FilePreviewContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, FilePreviewContainerComponent_ngx_preview_lightbox_0_Template, 1, 1, "ngx-preview-lightbox", 0)(1, FilePreviewContainerComponent_ngx_file_preview_item_1_Template, 1, 5, "ngx-file-preview-item", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.lightboxFile);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.previewFiles);
    }
  },
  dependencies: [NgForOf, NgIf, FilePreviewItemComponent, PreviewLightboxComponent],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;width:100%;background:#fafbfd}"],
  changeDetection: 0
});
var FilePreviewContainerComponent = _FilePreviewContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePreviewContainerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-file-preview-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ngx-preview-lightbox\r\n  *ngIf="lightboxFile"\r\n  [file]="lightboxFile"\r\n  (previewClose)="closeLightbox()"\r\n></ngx-preview-lightbox>\r\n<ngx-file-preview-item\r\n  *ngFor="let file of previewFiles"\r\n  [fileItem]="file"\r\n  (removeFile)="removeFile.next($event)"\r\n  (uploadSuccess)="uploadSuccess.next($event)"\r\n  (uploadFail)="uploadFail.next($event)"\r\n  (imageClicked)="openLightbox($event)"\r\n  [itemTemplate]="itemTemplate"\r\n  [adapter]="adapter"\r\n  [captions]="captions"\r\n  [enableAutoUpload]="enableAutoUpload"\r\n></ngx-file-preview-item>\r\n',
      styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;width:100%;background:#fafbfd}\n"]
    }]
  }], null, {
    previewFiles: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    enableAutoUpload: [{
      type: Input
    }],
    removeFile: [{
      type: Output
    }],
    uploadSuccess: [{
      type: Output
    }],
    uploadFail: [{
      type: Output
    }],
    adapter: [{
      type: Input
    }],
    captions: [{
      type: Input
    }]
  });
})();
var _FilePickerComponent = class _FilePickerComponent {
  constructor(fileService, fileValidatorService, changeRef) {
    this.fileService = fileService;
    this.fileValidatorService = fileValidatorService;
    this.changeRef = changeRef;
    this.uploadSuccess = new EventEmitter();
    this.uploadFail = new EventEmitter();
    this.removeSuccess = new EventEmitter();
    this.validationError = new EventEmitter();
    this.fileAdded = new EventEmitter();
    this.fileRemoved = new EventEmitter();
    this.enableCropper = false;
    this.showeDragDropZone = true;
    this.showPreviewContainer = true;
    this.uploadType = "multi";
    this.croppedCanvasOptions = {};
    this.captions = DefaultCaptions;
    this.enableAutoUpload = true;
    this.files = [];
    this.filesForCropper = [];
    this._cropClosed$ = new Subject();
    this._onDestroy$ = new Subject();
    this.injector = inject(Injector);
  }
  ngOnInit() {
    this._setCropperOptions();
    this._listenToCropClose();
  }
  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
  /** On input file selected */
  // TODO: fix any
  onChange(event) {
    const files = Array.from(event);
    this.handleFiles(files).subscribe();
  }
  /** On file dropped */
  dropped(event) {
    const files = event.files;
    const filesForUpload = new Subject();
    let droppedFilesCount = 0;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        droppedFilesCount += 1;
        const fileEntry = droppedFile.fileEntry;
        fileEntry.file((file) => {
          filesForUpload.next(file);
        });
      }
    }
    runInInjectionContext(this.injector, () => {
      filesForUpload.pipe(takeUntilDestroyed(), bufferCount(droppedFilesCount), switchMap((res) => this.handleFiles(res))).subscribe();
    });
  }
  /** Emits event when file upload api returns success  */
  onUploadSuccess(fileItem) {
    this.uploadSuccess.next(fileItem);
  }
  /** Emits event when file upload api returns success  */
  onUploadFail(er) {
    this.uploadFail.next(er);
  }
  /** Emits event when file remove api returns success  */
  onRemoveSuccess(fileItem) {
    this.removeSuccess.next(fileItem);
    this.removeFileFromList(fileItem);
  }
  getSafeUrl(file) {
    return this.fileService.createSafeUrl(file);
  }
  /** Removes file from UI and sends api */
  removeFile(fileItem) {
    if (!this.enableAutoUpload) {
      this.removeFileFromList(fileItem);
      return;
    }
    if (this.adapter) {
      this.adapter.removeFile(fileItem).subscribe(() => {
        this.onRemoveSuccess(fileItem);
      });
    } else {
      console.warn("no adapter was provided");
    }
  }
  /** @description Set files for uploader */
  setFiles(files) {
    this.files = files;
    this.changeRef.detectChanges();
  }
  /** Listen when Cropper is closed and open new cropper if next image exists */
  _listenToCropClose() {
    this._cropClosed$.pipe(takeUntil(this._onDestroy$)).subscribe((res) => {
      const croppedIndex = this.filesForCropper.findIndex((item) => item.name === res.fileName);
      const nextFile = croppedIndex !== -1 ? this.filesForCropper[croppedIndex + 1] : void 0;
      this.filesForCropper = [...this.filesForCropper].filter((item) => item.name !== res.fileName);
      if (nextFile) {
        this.openCropper(nextFile);
      }
    });
  }
  /** Sets custom cropper options if avaiable */
  _setCropperOptions() {
    if (!this.cropperOptions) {
      this._setDefaultCropperOptions();
    }
  }
  /** Sets manual cropper options if no custom options are avaiable */
  _setDefaultCropperOptions() {
    this.cropperOptions = DEFAULT_CROPPER_OPTIONS;
  }
  /** Handles input and drag/drop files */
  handleFiles(files) {
    if (!this.isValidMaxFileCount(files)) {
      return of(null);
    }
    const isValidUploadSync = files.every((item) => this._validateFileSync(item));
    const asyncFunctions = files.map((item) => this._validateFileAsync(item));
    return combineLatest([...asyncFunctions]).pipe(map((res) => {
      const isValidUploadAsync = res.every((result) => result === true);
      if (!isValidUploadSync || !isValidUploadAsync) {
        return;
      }
      files.forEach((file, index) => {
        this.handleInputFile(file, index);
      });
    }));
  }
  /** Validates synchronous validations */
  _validateFileSync(file) {
    if (!file) {
      return false;
    }
    if (!this.isValidUploadType(file)) {
      return false;
    }
    if (!this.isValidExtension(file, file.name)) {
      return false;
    }
    return true;
  }
  /** Validates asynchronous validations */
  _validateFileAsync(file) {
    if (!this.customValidator) {
      return of(true);
    }
    return this.customValidator(file).pipe(tap((res) => {
      if (!res) {
        this.validationError.next({
          file,
          error: FileValidationTypes.customValidator
        });
      }
    }));
  }
  /** Handles input and drag&drop files */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  handleInputFile(file, index) {
    const type = getFileCategoryType(file.type);
    if (type === "image" && this.enableCropper) {
      this.filesForCropper.push(file);
      if (!this.currentCropperFile) {
        this.openCropper(file);
      }
    } else {
      if (this.isValidSize(file, file.size)) {
        this.pushFile(file);
      }
    }
  }
  /** Validates if upload type is single so another file cannot be added */
  isValidUploadType(file) {
    const isValid = this.fileValidatorService.isValidUploadType(this.files, this.uploadType);
    if (!isValid) {
      this.validationError.next({
        file,
        error: FileValidationTypes.uploadType
      });
      return false;
    }
    return true;
  }
  /** Validates max file count */
  isValidMaxFileCount(files) {
    const isValid = this.fileValidatorService.isValidMaxFileCount(this.fileMaxCount, files, this.files);
    if (isValid) {
      return true;
    } else {
      this.validationError.next({
        file: null,
        error: FileValidationTypes.fileMaxCount
      });
      return false;
    }
  }
  /** Add file to file list after succesfull validation */
  pushFile(file, fileName = file.name) {
    const newFile = {
      file,
      fileName
    };
    const files = [...this.files, newFile];
    this.setFiles(files);
    this.fileAdded.next({
      file,
      fileName
    });
    this.changeRef.detectChanges();
  }
  /** Opens cropper for image crop */
  openCropper(file) {
    if (window.CROPPER || typeof Cropper !== "undefined") {
      this.safeCropImgUrl = this.fileService.createSafeUrl(file);
      this.currentCropperFile = file;
      this.changeRef.detectChanges();
    } else {
      console.warn("please import cropperjs script and styles to use cropper feature or disable it by setting [enableCropper]='false'");
      return;
    }
  }
  /** On img load event */
  cropperImgLoaded() {
    const image = document.getElementById("cropper-img");
    this.cropper = new Cropper(image, this.cropperOptions);
  }
  /** Close or cancel cropper */
  closeCropper(filePreview) {
    this.currentCropperFile = void 0;
    this.cropper = void 0;
    this.changeRef.detectChanges();
    setTimeout(() => this._cropClosed$.next(filePreview), 200);
  }
  /** Removes files from files list */
  removeFileFromList(file) {
    const files = this.files.filter((f) => f.fileName !== file.fileName);
    this.setFiles(files);
    this.fileRemoved.next(file);
    this.changeRef.detectChanges();
  }
  /** Validates file extension */
  isValidExtension(file, fileName) {
    const isValid = this.fileValidatorService.isValidExtension(fileName, this.fileExtensions);
    if (!isValid) {
      this.validationError.next({
        file,
        error: FileValidationTypes.extensions
      });
      return false;
    }
    return true;
  }
  /** Validates selected file size and total file size */
  isValidSize(newFile, newFileSize) {
    const isValidFileSize = this.fileValidatorService.isValidFileSize(newFileSize, this.fileMaxSize);
    const isValidTotalFileSize = this.fileValidatorService.isValidTotalFileSize(newFile, this.files, this.totalMaxSize);
    if (!isValidFileSize) {
      this.validationError.next({
        file: newFile,
        error: FileValidationTypes.fileMaxSize
      });
    }
    if (!isValidTotalFileSize) {
      this.validationError.next({
        file: newFile,
        error: FileValidationTypes.totalMaxSize
      });
    }
    return isValidFileSize && isValidTotalFileSize;
  }
  /** when crop button submitted */
  onCropSubmit() {
    const mimeType = lookup(this.currentCropperFile.name);
    if (!mimeType) {
      throw new Error("mimeType not found");
    }
    this.isCroppingBusy = true;
    this.cropper.getCroppedCanvas(this.croppedCanvasOptions).toBlob(this._blobFallBack.bind(this), mimeType);
  }
  /** After crop submit */
  _blobFallBack(blob) {
    if (!blob) {
      return;
    }
    if (this.isValidSize(blob, blob.size)) {
      this.pushFile(blob, this.currentCropperFile.name);
    }
    this.closeCropper({
      file: blob,
      fileName: this.currentCropperFile.name
    });
    this.isCroppingBusy = false;
    this.changeRef.detectChanges();
  }
};
_FilePickerComponent.ɵfac = function FilePickerComponent_Factory(t) {
  return new (t || _FilePickerComponent)(ɵɵdirectiveInject(FilePickerService), ɵɵdirectiveInject(FileValidatorService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_FilePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _FilePickerComponent,
  selectors: [["ngx-awesome-uploader"]],
  inputs: {
    customValidator: "customValidator",
    enableCropper: "enableCropper",
    showeDragDropZone: "showeDragDropZone",
    showPreviewContainer: "showPreviewContainer",
    itemTemplate: "itemTemplate",
    uploadType: "uploadType",
    fileMaxSize: "fileMaxSize",
    fileMaxCount: "fileMaxCount",
    totalMaxSize: "totalMaxSize",
    accept: "accept",
    fileExtensions: "fileExtensions",
    cropperOptions: "cropperOptions",
    croppedCanvasOptions: "croppedCanvasOptions",
    adapter: "adapter",
    dropzoneTemplate: "dropzoneTemplate",
    captions: "captions",
    enableAutoUpload: "enableAutoUpload",
    fileInputCapture: "fileInputCapture"
  },
  outputs: {
    uploadSuccess: "uploadSuccess",
    uploadFail: "uploadFail",
    removeSuccess: "removeSuccess",
    validationError: "validationError",
    fileAdded: "fileAdded",
    fileRemoved: "fileRemoved"
  },
  ngContentSelectors: _c8,
  decls: 6,
  vars: 9,
  consts: [["class", "file-drop-wrapper", 3, "click", 4, "ngIf"], ["type", "file", "name", "file[]", "id", "fileInput", 1, "file-input", 3, "multiple", "accept", "click", "change"], ["fileInput", ""], ["class", "cropperJsOverlay", 4, "ngIf"], [1, "files-preview-wrapper", 3, "ngClass"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", 4, "ngIf"], [1, "file-drop-wrapper", 3, "click"], [3, "customstyle", "captions", "fileDrop"], [1, "cropperJsOverlay"], [1, "cropperJsBox"], ["id", "cropper-img", 3, "src", "load"], [1, "cropper-actions"], ["type", "button", 1, "cropSubmit", 3, "disabled", "ngClass", "click"], ["type", "button", 1, "cropCancel", 3, "click"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail"]],
  template: function FilePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r15 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c7);
      ɵɵtemplate(0, FilePickerComponent_div_0_Template, 3, 2, "div", 0);
      ɵɵelementStart(1, "input", 1, 2);
      ɵɵlistener("click", function FilePickerComponent_Template_input_click_1_listener() {
        ɵɵrestoreView(_r15);
        const _r1 = ɵɵreference(2);
        return ɵɵresetView(_r1.value = null);
      })("change", function FilePickerComponent_Template_input_change_1_listener() {
        ɵɵrestoreView(_r15);
        const _r1 = ɵɵreference(2);
        return ɵɵresetView(ctx.onChange(_r1.files));
      });
      ɵɵelementEnd();
      ɵɵtemplate(3, FilePickerComponent_div_3_Template, 8, 7, "div", 3);
      ɵɵelementStart(4, "div", 4);
      ɵɵtemplate(5, FilePickerComponent_ngx_file_preview_container_5_Template, 1, 5, "ngx-file-preview-container", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showeDragDropZone);
      ɵɵadvance(1);
      ɵɵproperty("multiple", ctx.uploadType === "multi" ? "multiple" : "")("accept", ctx.accept);
      ɵɵattribute("capture", ctx.fileInputCapture);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.currentCropperFile);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c3, !ctx.showPreviewContainer));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.files);
    }
  },
  dependencies: [NgClass, NgIf, FileComponent, FilePreviewContainerComponent],
  styles: ['*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;overflow:auto;max-width:440px;border-radius:6px}.files-preview-wrapper[_ngcontent-%COMP%]{width:100%}#cropper-img[_ngcontent-%COMP%]{max-width:60vw;display:none}#cropper-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.file-drop-wrapper[_ngcontent-%COMP%]{width:100%;background:#fafbfd;padding-top:20px}.preview-container[_ngcontent-%COMP%]{display:flex}.cropperJsOverlay[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:fixed;z-index:999;top:0;left:0;width:100vw;height:100vh;background:#00000052}.cropperJsBox[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;max-height:calc(100vh - 88px);max-width:90vw}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]{display:flex}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px;padding:12px 25px;border-radius:6px;border:0;cursor:pointer}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   .cropSubmit[_ngcontent-%COMP%]{color:#fff;background:#16a085}  .cropper img{max-height:300px!important}#images[_ngcontent-%COMP%]{display:flex;justify-content:center;width:500px;overflow-x:auto}#images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{flex:0 0 100px;margin:0 2px;display:flex;flex-direction:column;align-items:flex-end}#fileInput[_ngcontent-%COMP%]{display:none}.uploader-submit-btn[_ngcontent-%COMP%]{background:#ffd740;color:#000000de;border:0;padding:0 16px;line-height:36px;font-size:15px;margin-top:12px;border-radius:4px;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;cursor:pointer}button[_ngcontent-%COMP%]:disabled{color:#00000042;background:#dcdcdc}.visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}button.is-loading[_ngcontent-%COMP%]{color:#00000042!important;background-color:#fff!important;box-shadow:none;cursor:not-allowed;outline:none}button.is-loading[_ngcontent-%COMP%]:after{content:"";font-family:sans-serif;font-weight:100;-webkit-animation:1.25s linear infinite _ngcontent-%COMP%_three-quarters;animation:1.25s linear infinite _ngcontent-%COMP%_three-quarters;border:3px solid #7f8c8d;border-right-color:transparent;border-radius:100%;box-sizing:border-box;display:inline-block;position:relative;vertical-align:middle;overflow:hidden;text-indent:-9999px;width:18px;height:18px;opacity:1;margin-left:10px}@keyframes _ngcontent-%COMP%_three-quarters{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}'],
  changeDetection: 0
});
var FilePickerComponent = _FilePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePickerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-awesome-uploader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div (click)="fileInput.click()" class="file-drop-wrapper" *ngIf="showeDragDropZone">\r
  <ngx-file-drop (fileDrop)="dropped($event)" [customstyle]="'custom-drag'" [captions]="captions">\r
    <ng-content select=".dropzoneTemplate"> </ng-content>\r
  </ngx-file-drop>\r
</div>\r
\r
<input\r
  type="file"\r
  name="file[]"\r
  id="fileInput"\r
  #fileInput\r
  [multiple]="uploadType === 'multi' ? 'multiple' : ''"\r
  [attr.capture]="fileInputCapture"\r
  (click)="fileInput.value = null"\r
  (change)="onChange(fileInput.files)"\r
  [accept]="accept"\r
  class="file-input"\r
/>\r
\r
<div class="cropperJsOverlay" *ngIf="currentCropperFile">\r
  <div class="cropperJsBox">\r
    <img [src]="safeCropImgUrl" id="cropper-img" (load)="cropperImgLoaded()" />\r
    <div class="cropper-actions">\r
      <button\r
        class="cropSubmit"\r
        (click)="onCropSubmit()"\r
        [disabled]="isCroppingBusy"\r
        type="button"\r
        [ngClass]="{ 'is-loading': isCroppingBusy }"\r
      >\r
        {{ captions?.cropper?.crop }}\r
      </button>\r
      <button\r
        class="cropCancel"\r
        type="button"\r
        (click)="\r
          closeCropper({\r
            file: currentCropperFile,\r
            fileName: currentCropperFile.name\r
          })\r
        "\r
      >\r
        {{ captions?.cropper?.cancel }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="files-preview-wrapper" [ngClass]="{ 'visually-hidden': !showPreviewContainer }">\r
  <ngx-file-preview-container\r
    *ngIf="files"\r
    [previewFiles]="files"\r
    (removeFile)="removeFile($event)"\r
    (uploadSuccess)="onUploadSuccess($event)"\r
    (uploadFail)="onUploadFail($event)"\r
    [adapter]="adapter"\r
    [itemTemplate]="itemTemplate"\r
    [captions]="captions"\r
    [enableAutoUpload]="enableAutoUpload"\r
  >\r
  </ngx-file-preview-container>\r
</div>\r
`,
      styles: ['*{box-sizing:border-box}:host{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;overflow:auto;max-width:440px;border-radius:6px}.files-preview-wrapper{width:100%}#cropper-img{max-width:60vw;display:none}#cropper-img img{width:100%;height:100%}.file-drop-wrapper{width:100%;background:#fafbfd;padding-top:20px}.preview-container{display:flex}.cropperJsOverlay{display:flex;justify-content:center;align-items:center;position:fixed;z-index:999;top:0;left:0;width:100vw;height:100vh;background:#00000052}.cropperJsBox{display:flex;flex-direction:column;justify-content:center;align-items:center;max-height:calc(100vh - 88px);max-width:90vw}.cropperJsBox .cropper-actions{display:flex}.cropperJsBox .cropper-actions button{margin:5px;padding:12px 25px;border-radius:6px;border:0;cursor:pointer}.cropperJsBox .cropper-actions .cropSubmit{color:#fff;background:#16a085}::ng-deep .cropper img{max-height:300px!important}#images{display:flex;justify-content:center;width:500px;overflow-x:auto}#images .image{flex:0 0 100px;margin:0 2px;display:flex;flex-direction:column;align-items:flex-end}#fileInput{display:none}.uploader-submit-btn{background:#ffd740;color:#000000de;border:0;padding:0 16px;line-height:36px;font-size:15px;margin-top:12px;border-radius:4px;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;cursor:pointer}button:disabled{color:#00000042;background:#dcdcdc}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}button.is-loading{color:#00000042!important;background-color:#fff!important;box-shadow:none;cursor:not-allowed;outline:none}button.is-loading:after{content:"";font-family:sans-serif;font-weight:100;-webkit-animation:1.25s linear infinite three-quarters;animation:1.25s linear infinite three-quarters;border:3px solid #7f8c8d;border-right-color:transparent;border-radius:100%;box-sizing:border-box;display:inline-block;position:relative;vertical-align:middle;overflow:hidden;text-indent:-9999px;width:18px;height:18px;opacity:1;margin-left:10px}@keyframes three-quarters{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\n']
    }]
  }], () => [{
    type: FilePickerService
  }, {
    type: FileValidatorService
  }, {
    type: ChangeDetectorRef
  }], {
    uploadSuccess: [{
      type: Output
    }],
    uploadFail: [{
      type: Output
    }],
    removeSuccess: [{
      type: Output
    }],
    validationError: [{
      type: Output
    }],
    fileAdded: [{
      type: Output
    }],
    fileRemoved: [{
      type: Output
    }],
    customValidator: [{
      type: Input
    }],
    enableCropper: [{
      type: Input
    }],
    showeDragDropZone: [{
      type: Input
    }],
    showPreviewContainer: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    uploadType: [{
      type: Input
    }],
    fileMaxSize: [{
      type: Input
    }],
    fileMaxCount: [{
      type: Input
    }],
    totalMaxSize: [{
      type: Input
    }],
    accept: [{
      type: Input
    }],
    fileExtensions: [{
      type: Input
    }],
    cropperOptions: [{
      type: Input
    }],
    croppedCanvasOptions: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    dropzoneTemplate: [{
      type: Input
    }],
    captions: [{
      type: Input
    }],
    enableAutoUpload: [{
      type: Input
    }],
    fileInputCapture: [{
      type: Input
    }]
  });
})();
var _FileDropModule = class _FileDropModule {
};
_FileDropModule.ɵfac = function FileDropModule_Factory(t) {
  return new (t || _FileDropModule)();
};
_FileDropModule.ɵmod = ɵɵdefineNgModule({
  type: _FileDropModule,
  bootstrap: [FileComponent],
  declarations: [FileComponent, CloudIconComponent],
  imports: [CommonModule],
  exports: [FileComponent]
});
_FileDropModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var FileDropModule = _FileDropModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDropModule, [{
    type: NgModule,
    args: [{
      declarations: [FileComponent, CloudIconComponent],
      exports: [FileComponent],
      imports: [CommonModule],
      providers: [],
      bootstrap: [FileComponent]
    }]
  }], null, null);
})();
var _FilePickerModule = class _FilePickerModule {
};
_FilePickerModule.ɵfac = function FilePickerModule_Factory(t) {
  return new (t || _FilePickerModule)();
};
_FilePickerModule.ɵmod = ɵɵdefineNgModule({
  type: _FilePickerModule,
  declarations: [FilePickerComponent, FilePreviewContainerComponent, FilePreviewItemComponent, PreviewLightboxComponent, RefreshIconComponent, CloseIconComponent],
  imports: [CommonModule, FileDropModule],
  exports: [FilePickerComponent]
});
_FilePickerModule.ɵinj = ɵɵdefineInjector({
  providers: [FilePickerService],
  imports: [CommonModule, FileDropModule]
});
var FilePickerModule = _FilePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FileDropModule],
      declarations: [FilePickerComponent, FilePreviewContainerComponent, FilePreviewItemComponent, PreviewLightboxComponent, RefreshIconComponent, CloseIconComponent],
      exports: [FilePickerComponent],
      providers: [FilePickerService]
    }]
  }], null, null);
})();
export {
  FilePickerAdapter,
  FilePickerComponent,
  FilePickerModule,
  FilePickerService,
  FileValidationTypes,
  UploadStatus
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.0.6
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-awesome-uploader.js.map
