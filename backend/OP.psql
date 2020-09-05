--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.4 (Ubuntu 12.4-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: Tags; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public."Tags" (
    id integer NOT NULL,
    tag character varying(200) NOT NULL
);


ALTER TABLE public."Tags" OWNER TO "OPUser";

--
-- Name: Tags_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public."Tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tags_id_seq" OWNER TO "OPUser";

--
-- Name: Tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public."Tags_id_seq" OWNED BY public."Tags".id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO "OPUser";

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO "OPUser";

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO "OPUser";

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO "OPUser";

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO "OPUser";

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO "OPUser";

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO "OPUser";

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO "OPUser";

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO "OPUser";

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO "OPUser";

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO "OPUser";

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO "OPUser";

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO "OPUser";

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO "OPUser";

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO "OPUser";

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO "OPUser";

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO "OPUser";

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO "OPUser";

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO "OPUser";

--
-- Name: django_site; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.django_site (
    id integer NOT NULL,
    domain character varying(100) NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.django_site OWNER TO "OPUser";

--
-- Name: django_site_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.django_site_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_site_id_seq OWNER TO "OPUser";

--
-- Name: django_site_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.django_site_id_seq OWNED BY public.django_site.id;


--
-- Name: photologue_gallery; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_gallery (
    id integer NOT NULL,
    date_added timestamp with time zone NOT NULL,
    title character varying(250) NOT NULL,
    slug character varying(250) NOT NULL,
    description text NOT NULL,
    is_public boolean NOT NULL
);


ALTER TABLE public.photologue_gallery OWNER TO "OPUser";

--
-- Name: photologue_gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_gallery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_gallery_id_seq OWNER TO "OPUser";

--
-- Name: photologue_gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_gallery_id_seq OWNED BY public.photologue_gallery.id;


--
-- Name: photologue_gallery_photos; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_gallery_photos (
    id integer NOT NULL,
    sort_value integer NOT NULL,
    gallery_id integer NOT NULL,
    photo_id integer NOT NULL
);


ALTER TABLE public.photologue_gallery_photos OWNER TO "OPUser";

--
-- Name: photologue_gallery_photos_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_gallery_photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_gallery_photos_id_seq OWNER TO "OPUser";

--
-- Name: photologue_gallery_photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_gallery_photos_id_seq OWNED BY public.photologue_gallery_photos.id;


--
-- Name: photologue_gallery_sites; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_gallery_sites (
    id integer NOT NULL,
    gallery_id integer NOT NULL,
    site_id integer NOT NULL
);


ALTER TABLE public.photologue_gallery_sites OWNER TO "OPUser";

--
-- Name: photologue_gallery_sites_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_gallery_sites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_gallery_sites_id_seq OWNER TO "OPUser";

--
-- Name: photologue_gallery_sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_gallery_sites_id_seq OWNED BY public.photologue_gallery_sites.id;


--
-- Name: photologue_photo; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_photo (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    date_taken timestamp with time zone,
    view_count integer NOT NULL,
    crop_from character varying(10) NOT NULL,
    title character varying(250) NOT NULL,
    slug character varying(250) NOT NULL,
    caption text NOT NULL,
    date_added timestamp with time zone NOT NULL,
    is_public boolean NOT NULL,
    effect_id integer,
    CONSTRAINT photologue_photo_view_count_check CHECK ((view_count >= 0))
);


ALTER TABLE public.photologue_photo OWNER TO "OPUser";

--
-- Name: photologue_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_photo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_photo_id_seq OWNER TO "OPUser";

--
-- Name: photologue_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_photo_id_seq OWNED BY public.photologue_photo.id;


--
-- Name: photologue_photo_sites; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_photo_sites (
    id integer NOT NULL,
    photo_id integer NOT NULL,
    site_id integer NOT NULL
);


ALTER TABLE public.photologue_photo_sites OWNER TO "OPUser";

--
-- Name: photologue_photo_sites_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_photo_sites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_photo_sites_id_seq OWNER TO "OPUser";

--
-- Name: photologue_photo_sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_photo_sites_id_seq OWNED BY public.photologue_photo_sites.id;


--
-- Name: photologue_photoeffect; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_photoeffect (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text NOT NULL,
    transpose_method character varying(15) NOT NULL,
    color double precision NOT NULL,
    brightness double precision NOT NULL,
    contrast double precision NOT NULL,
    sharpness double precision NOT NULL,
    filters character varying(200) NOT NULL,
    reflection_size double precision NOT NULL,
    reflection_strength double precision NOT NULL,
    background_color character varying(7) NOT NULL
);


ALTER TABLE public.photologue_photoeffect OWNER TO "OPUser";

--
-- Name: photologue_photoeffect_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_photoeffect_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_photoeffect_id_seq OWNER TO "OPUser";

--
-- Name: photologue_photoeffect_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_photoeffect_id_seq OWNED BY public.photologue_photoeffect.id;


--
-- Name: photologue_photosize; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_photosize (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    quality integer NOT NULL,
    upscale boolean NOT NULL,
    crop boolean NOT NULL,
    pre_cache boolean NOT NULL,
    increment_count boolean NOT NULL,
    effect_id integer,
    watermark_id integer,
    CONSTRAINT photologue_photosize_height_check CHECK ((height >= 0)),
    CONSTRAINT photologue_photosize_quality_check CHECK ((quality >= 0)),
    CONSTRAINT photologue_photosize_width_check CHECK ((width >= 0))
);


ALTER TABLE public.photologue_photosize OWNER TO "OPUser";

--
-- Name: photologue_photosize_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_photosize_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_photosize_id_seq OWNER TO "OPUser";

--
-- Name: photologue_photosize_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_photosize_id_seq OWNED BY public.photologue_photosize.id;


--
-- Name: photologue_watermark; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.photologue_watermark (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text NOT NULL,
    image character varying(100) NOT NULL,
    style character varying(5) NOT NULL,
    opacity double precision NOT NULL
);


ALTER TABLE public.photologue_watermark OWNER TO "OPUser";

--
-- Name: photologue_watermark_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.photologue_watermark_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photologue_watermark_id_seq OWNER TO "OPUser";

--
-- Name: photologue_watermark_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.photologue_watermark_id_seq OWNED BY public.photologue_watermark.id;


--
-- Name: stories; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.stories (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    story text NOT NULL
);


ALTER TABLE public.stories OWNER TO "OPUser";

--
-- Name: stories_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.stories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stories_id_seq OWNER TO "OPUser";

--
-- Name: stories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.stories_id_seq OWNED BY public.stories.id;


--
-- Name: track_images; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.track_images (
    id integer NOT NULL,
    cover character varying(100) NOT NULL,
    track_id integer NOT NULL
);


ALTER TABLE public.track_images OWNER TO "OPUser";

--
-- Name: track_images_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.track_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.track_images_id_seq OWNER TO "OPUser";

--
-- Name: track_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.track_images_id_seq OWNED BY public.track_images.id;


--
-- Name: tracks; Type: TABLE; Schema: public; Owner: OPUser
--

CREATE TABLE public.tracks (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    artist character varying(200) NOT NULL,
    description text NOT NULL,
    youtube_link character varying(200) NOT NULL,
    tags character varying(200)[] NOT NULL,
    email character varying(254) NOT NULL,
    story_id integer NOT NULL,
    track_image_id integer
);


ALTER TABLE public.tracks OWNER TO "OPUser";

--
-- Name: tracks_id_seq; Type: SEQUENCE; Schema: public; Owner: OPUser
--

CREATE SEQUENCE public.tracks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tracks_id_seq OWNER TO "OPUser";

--
-- Name: tracks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: OPUser
--

ALTER SEQUENCE public.tracks_id_seq OWNED BY public.tracks.id;


--
-- Name: Tags id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public."Tags" ALTER COLUMN id SET DEFAULT nextval('public."Tags_id_seq"'::regclass);


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: django_site id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_site ALTER COLUMN id SET DEFAULT nextval('public.django_site_id_seq'::regclass);


--
-- Name: photologue_gallery id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery ALTER COLUMN id SET DEFAULT nextval('public.photologue_gallery_id_seq'::regclass);


--
-- Name: photologue_gallery_photos id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_photos ALTER COLUMN id SET DEFAULT nextval('public.photologue_gallery_photos_id_seq'::regclass);


--
-- Name: photologue_gallery_sites id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_sites ALTER COLUMN id SET DEFAULT nextval('public.photologue_gallery_sites_id_seq'::regclass);


--
-- Name: photologue_photo id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo ALTER COLUMN id SET DEFAULT nextval('public.photologue_photo_id_seq'::regclass);


--
-- Name: photologue_photo_sites id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo_sites ALTER COLUMN id SET DEFAULT nextval('public.photologue_photo_sites_id_seq'::regclass);


--
-- Name: photologue_photoeffect id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photoeffect ALTER COLUMN id SET DEFAULT nextval('public.photologue_photoeffect_id_seq'::regclass);


--
-- Name: photologue_photosize id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photosize ALTER COLUMN id SET DEFAULT nextval('public.photologue_photosize_id_seq'::regclass);


--
-- Name: photologue_watermark id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_watermark ALTER COLUMN id SET DEFAULT nextval('public.photologue_watermark_id_seq'::regclass);


--
-- Name: stories id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.stories ALTER COLUMN id SET DEFAULT nextval('public.stories_id_seq'::regclass);


--
-- Name: track_images id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.track_images ALTER COLUMN id SET DEFAULT nextval('public.track_images_id_seq'::regclass);


--
-- Name: tracks id; Type: DEFAULT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.tracks ALTER COLUMN id SET DEFAULT nextval('public.tracks_id_seq'::regclass);


--
-- Data for Name: Tags; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public."Tags" (id, tag) FROM stdin;
1	anxious
2	aroused
3	betrayed
4	bitter
5	depressed
6	disappointed
7	energetic
8	excluded
9	exhausted
10	grateful
11	grief
12	hopeful
13	insecure
14	inspired
15	jealous
16	loving
17	nostalgic
18	numb
19	playful
20	quirky
21	rejected
22	remorseful
23	stressed
24	vulnerable
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add site	7	add_site
26	Can change site	7	change_site
27	Can delete site	7	delete_site
28	Can view site	7	view_site
29	Can add stories	8	add_stories
30	Can change stories	8	change_stories
31	Can delete stories	8	delete_stories
32	Can view stories	8	view_stories
33	Can add tracks	9	add_tracks
34	Can change tracks	9	change_tracks
35	Can delete tracks	9	delete_tracks
36	Can view tracks	9	view_tracks
37	Can add track image	10	add_trackimage
38	Can change track image	10	change_trackimage
39	Can delete track image	10	delete_trackimage
40	Can view track image	10	view_trackimage
41	Can add gallery	11	add_gallery
42	Can change gallery	11	change_gallery
43	Can delete gallery	11	delete_gallery
44	Can view gallery	11	view_gallery
45	Can add photo	12	add_photo
46	Can change photo	12	change_photo
47	Can delete photo	12	delete_photo
48	Can view photo	12	view_photo
49	Can add photo effect	13	add_photoeffect
50	Can change photo effect	13	change_photoeffect
51	Can delete photo effect	13	delete_photoeffect
52	Can view photo effect	13	view_photoeffect
53	Can add photo size	14	add_photosize
54	Can change photo size	14	change_photosize
55	Can delete photo size	14	delete_photosize
56	Can view photo size	14	view_photosize
57	Can add watermark	15	add_watermark
58	Can change watermark	15	change_watermark
59	Can delete watermark	15	delete_watermark
60	Can view watermark	15	view_watermark
61	Can add tags	16	add_tags
62	Can change tags	16	change_tags
63	Can delete tags	16	delete_tags
64	Can view tags	16	view_tags
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$a9nHsxPt0viG$k8NqJPIKMTUq6u7T/dTEXUVU6tazlf54QfMhZu2SYD0=	2020-09-04 19:53:31.336296+10	t	OPUser			farhansghazi@outlook.com	t	t	2020-09-04 18:18:49.235195+10
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	sites	site
8	app	stories
9	app	tracks
10	app	trackimage
11	photologue	gallery
12	photologue	photo
13	photologue	photoeffect
14	photologue	photosize
15	photologue	watermark
16	app	tags
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-09-04 17:36:48.121723+10
2	auth	0001_initial	2020-09-04 17:36:48.251474+10
3	admin	0001_initial	2020-09-04 17:36:48.422268+10
4	admin	0002_logentry_remove_auto_add	2020-09-04 17:36:48.47461+10
5	admin	0003_logentry_add_action_flag_choices	2020-09-04 17:36:48.519695+10
6	app	0001_initial	2020-09-04 17:36:48.56365+10
7	contenttypes	0002_remove_content_type_name	2020-09-04 17:36:48.618058+10
8	auth	0002_alter_permission_name_max_length	2020-09-04 17:36:48.631795+10
9	auth	0003_alter_user_email_max_length	2020-09-04 17:36:48.644952+10
10	auth	0004_alter_user_username_opts	2020-09-04 17:36:48.655206+10
11	auth	0005_alter_user_last_login_null	2020-09-04 17:36:48.666+10
12	auth	0006_require_contenttypes_0002	2020-09-04 17:36:48.670106+10
13	auth	0007_alter_validators_add_error_messages	2020-09-04 17:36:48.682421+10
14	auth	0008_alter_user_username_max_length	2020-09-04 17:36:48.699561+10
15	auth	0009_alter_user_last_name_max_length	2020-09-04 17:36:48.710521+10
16	auth	0010_alter_group_name_max_length	2020-09-04 17:36:48.721041+10
17	auth	0011_update_proxy_permissions	2020-09-04 17:36:48.73233+10
18	sessions	0001_initial	2020-09-04 17:36:48.748994+10
19	sites	0001_initial	2020-09-04 17:36:48.784484+10
20	sites	0002_alter_domain_unique	2020-09-04 17:36:48.81457+10
21	app	0002_remove_stories_count	2020-09-04 19:29:01.948813+10
22	app	0003_auto_20200904_0940	2020-09-04 19:40:23.329377+10
23	app	0004_trackimage	2020-09-04 19:42:06.168196+10
24	photologue	0001_initial	2020-09-04 19:52:34.975353+10
25	photologue	0002_photosize_data	2020-09-04 19:52:35.147476+10
26	photologue	0003_auto_20140822_1716	2020-09-04 19:52:35.177806+10
27	photologue	0004_auto_20140915_1259	2020-09-04 19:52:35.249478+10
28	photologue	0005_auto_20141027_1552	2020-09-04 19:52:35.274586+10
29	photologue	0006_auto_20141028_2005	2020-09-04 19:52:35.294359+10
30	photologue	0007_auto_20150404_1737	2020-09-04 19:52:35.351539+10
31	photologue	0008_auto_20150509_1557	2020-09-04 19:52:35.36855+10
32	photologue	0009_auto_20160102_0904	2020-09-04 19:52:35.378588+10
33	photologue	0010_auto_20160105_1307	2020-09-04 19:52:35.411442+10
34	photologue	0011_auto_20190223_2138	2020-09-04 19:52:35.419388+10
35	photologue	0012_auto_20200904_0952	2020-09-04 19:52:35.426908+10
36	app	0005_tracks_track_image	2020-09-04 23:12:41.087336+10
37	app	0006_auto_20200904_1427	2020-09-05 00:27:04.808129+10
38	app	0007_auto_20200904_1435	2020-09-05 00:35:14.602716+10
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
39wqkpuq3id053aj7273ypvhnk547gkf	NDQ1MWIzZDc2NTU2NTQ4NGYzZTk3ODdiNWRjM2UyNGFhMjI0Mzc0YTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0ZjVmNTc4ZjU2MDM3NGIzOTNmYjYwOWE4MWI4MmRhOGQwY2UxNmY4In0=	2020-09-18 18:18:57.816223+10
48h6ru28qlbydl745h8n5ufwfnhar1o9	NDQ1MWIzZDc2NTU2NTQ4NGYzZTk3ODdiNWRjM2UyNGFhMjI0Mzc0YTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0ZjVmNTc4ZjU2MDM3NGIzOTNmYjYwOWE4MWI4MmRhOGQwY2UxNmY4In0=	2020-09-18 19:53:31.340699+10
\.


--
-- Data for Name: django_site; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.django_site (id, domain, name) FROM stdin;
1	example.com	example.com
\.


--
-- Data for Name: photologue_gallery; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_gallery (id, date_added, title, slug, description, is_public) FROM stdin;
\.


--
-- Data for Name: photologue_gallery_photos; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_gallery_photos (id, sort_value, gallery_id, photo_id) FROM stdin;
\.


--
-- Data for Name: photologue_gallery_sites; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_gallery_sites (id, gallery_id, site_id) FROM stdin;
\.


--
-- Data for Name: photologue_photo; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_photo (id, image, date_taken, view_count, crop_from, title, slug, caption, date_added, is_public, effect_id) FROM stdin;
\.


--
-- Data for Name: photologue_photo_sites; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_photo_sites (id, photo_id, site_id) FROM stdin;
\.


--
-- Data for Name: photologue_photoeffect; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_photoeffect (id, name, description, transpose_method, color, brightness, contrast, sharpness, filters, reflection_size, reflection_strength, background_color) FROM stdin;
\.


--
-- Data for Name: photologue_photosize; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_photosize (id, name, width, height, quality, upscale, crop, pre_cache, increment_count, effect_id, watermark_id) FROM stdin;
1	admin_thumbnail	100	75	70	f	t	t	f	\N	\N
2	thumbnail	100	75	70	f	t	t	f	\N	\N
3	display	400	0	70	f	f	t	t	\N	\N
\.


--
-- Data for Name: photologue_watermark; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.photologue_watermark (id, name, description, image, style, opacity) FROM stdin;
\.


--
-- Data for Name: stories; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.stories (id, name, story) FROM stdin;
\.


--
-- Data for Name: track_images; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.track_images (id, cover, track_id) FROM stdin;
\.


--
-- Data for Name: tracks; Type: TABLE DATA; Schema: public; Owner: OPUser
--

COPY public.tracks (id, name, artist, description, youtube_link, tags, email, story_id, track_image_id) FROM stdin;
\.


--
-- Name: Tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public."Tags_id_seq"', 24, true);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 64, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 16, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 38, true);


--
-- Name: django_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.django_site_id_seq', 1, true);


--
-- Name: photologue_gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_gallery_id_seq', 1, false);


--
-- Name: photologue_gallery_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_gallery_photos_id_seq', 1, false);


--
-- Name: photologue_gallery_sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_gallery_sites_id_seq', 1, false);


--
-- Name: photologue_photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_photo_id_seq', 1, false);


--
-- Name: photologue_photo_sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_photo_sites_id_seq', 1, false);


--
-- Name: photologue_photoeffect_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_photoeffect_id_seq', 1, false);


--
-- Name: photologue_photosize_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_photosize_id_seq', 3, true);


--
-- Name: photologue_watermark_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.photologue_watermark_id_seq', 1, false);


--
-- Name: stories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.stories_id_seq', 1, false);


--
-- Name: track_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.track_images_id_seq', 1, false);


--
-- Name: tracks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: OPUser
--

SELECT pg_catalog.setval('public.tracks_id_seq', 1, false);


--
-- Name: Tags Tags_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public."Tags"
    ADD CONSTRAINT "Tags_pkey" PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: django_site django_site_domain_a2e37b91_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_site
    ADD CONSTRAINT django_site_domain_a2e37b91_uniq UNIQUE (domain);


--
-- Name: django_site django_site_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_site
    ADD CONSTRAINT django_site_pkey PRIMARY KEY (id);


--
-- Name: photologue_gallery_photos photologue_gallery_photos_gallery_id_photo_id_ac3d7969_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_photos
    ADD CONSTRAINT photologue_gallery_photos_gallery_id_photo_id_ac3d7969_uniq UNIQUE (gallery_id, photo_id);


--
-- Name: photologue_gallery_photos photologue_gallery_photos_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_photos
    ADD CONSTRAINT photologue_gallery_photos_pkey PRIMARY KEY (id);


--
-- Name: photologue_gallery photologue_gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery
    ADD CONSTRAINT photologue_gallery_pkey PRIMARY KEY (id);


--
-- Name: photologue_gallery_sites photologue_gallery_sites_gallery_id_site_id_4158504d_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_sites
    ADD CONSTRAINT photologue_gallery_sites_gallery_id_site_id_4158504d_uniq UNIQUE (gallery_id, site_id);


--
-- Name: photologue_gallery_sites photologue_gallery_sites_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_sites
    ADD CONSTRAINT photologue_gallery_sites_pkey PRIMARY KEY (id);


--
-- Name: photologue_gallery photologue_gallery_slug_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery
    ADD CONSTRAINT photologue_gallery_slug_key UNIQUE (slug);


--
-- Name: photologue_gallery photologue_gallery_title_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery
    ADD CONSTRAINT photologue_gallery_title_key UNIQUE (title);


--
-- Name: photologue_photo photologue_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo
    ADD CONSTRAINT photologue_photo_pkey PRIMARY KEY (id);


--
-- Name: photologue_photo_sites photologue_photo_sites_photo_id_site_id_a8528863_uniq; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo_sites
    ADD CONSTRAINT photologue_photo_sites_photo_id_site_id_a8528863_uniq UNIQUE (photo_id, site_id);


--
-- Name: photologue_photo_sites photologue_photo_sites_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo_sites
    ADD CONSTRAINT photologue_photo_sites_pkey PRIMARY KEY (id);


--
-- Name: photologue_photo photologue_photo_slug_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo
    ADD CONSTRAINT photologue_photo_slug_key UNIQUE (slug);


--
-- Name: photologue_photo photologue_photo_title_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo
    ADD CONSTRAINT photologue_photo_title_key UNIQUE (title);


--
-- Name: photologue_photoeffect photologue_photoeffect_name_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photoeffect
    ADD CONSTRAINT photologue_photoeffect_name_key UNIQUE (name);


--
-- Name: photologue_photoeffect photologue_photoeffect_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photoeffect
    ADD CONSTRAINT photologue_photoeffect_pkey PRIMARY KEY (id);


--
-- Name: photologue_photosize photologue_photosize_name_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photosize
    ADD CONSTRAINT photologue_photosize_name_key UNIQUE (name);


--
-- Name: photologue_photosize photologue_photosize_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photosize
    ADD CONSTRAINT photologue_photosize_pkey PRIMARY KEY (id);


--
-- Name: photologue_watermark photologue_watermark_name_key; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_watermark
    ADD CONSTRAINT photologue_watermark_name_key UNIQUE (name);


--
-- Name: photologue_watermark photologue_watermark_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_watermark
    ADD CONSTRAINT photologue_watermark_pkey PRIMARY KEY (id);


--
-- Name: stories stories_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.stories
    ADD CONSTRAINT stories_pkey PRIMARY KEY (id);


--
-- Name: track_images track_images_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.track_images
    ADD CONSTRAINT track_images_pkey PRIMARY KEY (id);


--
-- Name: tracks tracks_pkey; Type: CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: django_site_domain_a2e37b91_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX django_site_domain_a2e37b91_like ON public.django_site USING btree (domain varchar_pattern_ops);


--
-- Name: photologue_gallery_photos_gallery_id_770eac69; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_photos_gallery_id_770eac69 ON public.photologue_gallery_photos USING btree (gallery_id);


--
-- Name: photologue_gallery_photos_photo_id_38de5ebc; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_photos_photo_id_38de5ebc ON public.photologue_gallery_photos USING btree (photo_id);


--
-- Name: photologue_gallery_sites_gallery_id_263bc875; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_sites_gallery_id_263bc875 ON public.photologue_gallery_sites USING btree (gallery_id);


--
-- Name: photologue_gallery_sites_site_id_ff8bed9d; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_sites_site_id_ff8bed9d ON public.photologue_gallery_sites USING btree (site_id);


--
-- Name: photologue_gallery_slug_abfacd41_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_slug_abfacd41_like ON public.photologue_gallery USING btree (slug varchar_pattern_ops);


--
-- Name: photologue_gallery_title_a06ddde2_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_gallery_title_a06ddde2_like ON public.photologue_gallery USING btree (title varchar_pattern_ops);


--
-- Name: photologue_photo_effect_id_5f27aba5; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photo_effect_id_5f27aba5 ON public.photologue_photo USING btree (effect_id);


--
-- Name: photologue_photo_sites_photo_id_1e4e4a98; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photo_sites_photo_id_1e4e4a98 ON public.photologue_photo_sites USING btree (photo_id);


--
-- Name: photologue_photo_sites_site_id_a26b734c; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photo_sites_site_id_a26b734c ON public.photologue_photo_sites USING btree (site_id);


--
-- Name: photologue_photo_slug_dd4a5445_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photo_slug_dd4a5445_like ON public.photologue_photo USING btree (slug varchar_pattern_ops);


--
-- Name: photologue_photo_title_6538c71c_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photo_title_6538c71c_like ON public.photologue_photo USING btree (title varchar_pattern_ops);


--
-- Name: photologue_photoeffect_name_064ed79e_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photoeffect_name_064ed79e_like ON public.photologue_photoeffect USING btree (name varchar_pattern_ops);


--
-- Name: photologue_photosize_effect_id_1d9b1b30; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photosize_effect_id_1d9b1b30 ON public.photologue_photosize USING btree (effect_id);


--
-- Name: photologue_photosize_name_5665df52_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photosize_name_5665df52_like ON public.photologue_photosize USING btree (name varchar_pattern_ops);


--
-- Name: photologue_photosize_watermark_id_f9419f99; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_photosize_watermark_id_f9419f99 ON public.photologue_photosize USING btree (watermark_id);


--
-- Name: photologue_watermark_name_95024e67_like; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX photologue_watermark_name_95024e67_like ON public.photologue_watermark USING btree (name varchar_pattern_ops);


--
-- Name: track_images_track_id_bb08d6d2; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX track_images_track_id_bb08d6d2 ON public.track_images USING btree (track_id);


--
-- Name: tracks_story_id_42126be1; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX tracks_story_id_42126be1 ON public.tracks USING btree (story_id);


--
-- Name: tracks_track_image_id_4943af67; Type: INDEX; Schema: public; Owner: OPUser
--

CREATE INDEX tracks_track_image_id_4943af67 ON public.tracks USING btree (track_image_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_gallery_photos photologue_gallery_p_gallery_id_770eac69_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_photos
    ADD CONSTRAINT photologue_gallery_p_gallery_id_770eac69_fk_photologu FOREIGN KEY (gallery_id) REFERENCES public.photologue_gallery(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_gallery_photos photologue_gallery_p_photo_id_38de5ebc_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_photos
    ADD CONSTRAINT photologue_gallery_p_photo_id_38de5ebc_fk_photologu FOREIGN KEY (photo_id) REFERENCES public.photologue_photo(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_gallery_sites photologue_gallery_s_gallery_id_263bc875_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_sites
    ADD CONSTRAINT photologue_gallery_s_gallery_id_263bc875_fk_photologu FOREIGN KEY (gallery_id) REFERENCES public.photologue_gallery(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_gallery_sites photologue_gallery_sites_site_id_ff8bed9d_fk_django_site_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_gallery_sites
    ADD CONSTRAINT photologue_gallery_sites_site_id_ff8bed9d_fk_django_site_id FOREIGN KEY (site_id) REFERENCES public.django_site(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_photo photologue_photo_effect_id_5f27aba5_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo
    ADD CONSTRAINT photologue_photo_effect_id_5f27aba5_fk_photologu FOREIGN KEY (effect_id) REFERENCES public.photologue_photoeffect(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_photo_sites photologue_photo_sites_photo_id_1e4e4a98_fk_photologue_photo_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo_sites
    ADD CONSTRAINT photologue_photo_sites_photo_id_1e4e4a98_fk_photologue_photo_id FOREIGN KEY (photo_id) REFERENCES public.photologue_photo(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_photo_sites photologue_photo_sites_site_id_a26b734c_fk_django_site_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photo_sites
    ADD CONSTRAINT photologue_photo_sites_site_id_a26b734c_fk_django_site_id FOREIGN KEY (site_id) REFERENCES public.django_site(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_photosize photologue_photosize_effect_id_1d9b1b30_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photosize
    ADD CONSTRAINT photologue_photosize_effect_id_1d9b1b30_fk_photologu FOREIGN KEY (effect_id) REFERENCES public.photologue_photoeffect(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: photologue_photosize photologue_photosize_watermark_id_f9419f99_fk_photologu; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.photologue_photosize
    ADD CONSTRAINT photologue_photosize_watermark_id_f9419f99_fk_photologu FOREIGN KEY (watermark_id) REFERENCES public.photologue_watermark(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: track_images track_images_track_id_bb08d6d2_fk_tracks_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.track_images
    ADD CONSTRAINT track_images_track_id_bb08d6d2_fk_tracks_id FOREIGN KEY (track_id) REFERENCES public.tracks(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: tracks tracks_story_id_42126be1_fk_stories_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_story_id_42126be1_fk_stories_id FOREIGN KEY (story_id) REFERENCES public.stories(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: tracks tracks_track_image_id_4943af67_fk_track_images_id; Type: FK CONSTRAINT; Schema: public; Owner: OPUser
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_track_image_id_4943af67_fk_track_images_id FOREIGN KEY (track_image_id) REFERENCES public.track_images(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

