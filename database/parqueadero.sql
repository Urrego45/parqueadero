PGDMP     4            	        |            parqueadero %   14.12 (Ubuntu 14.12-0ubuntu0.22.04.1) %   14.12 (Ubuntu 14.12-0ubuntu0.22.04.1)     L           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            M           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            N           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            O           1262    16705    parqueadero    DATABASE     `   CREATE DATABASE parqueadero WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE parqueadero;
                postgres    false            �            1259    16706    empresas    TABLE     �   CREATE TABLE public.empresas (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying(30),
    direccion character varying(50),
    telefono character varying(15)
);
    DROP TABLE public.empresas;
       public         heap    postgres    false            �            1259    16729    parametrizacion_vehiculo    TABLE     �   CREATE TABLE public.parametrizacion_vehiculo (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    parqueadero uuid,
    tipo_vehiculo smallint,
    cupos smallint
);
 ,   DROP TABLE public.parametrizacion_vehiculo;
       public         heap    postgres    false            �            1259    16718    parqueaderos    TABLE     �   CREATE TABLE public.parqueaderos (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    empresa uuid,
    nombre character varying(30),
    direccion character varying(50),
    telefono character varying(15)
);
     DROP TABLE public.parqueaderos;
       public         heap    postgres    false            �            1259    16768    parqueaderos_usuarios    TABLE     �   CREATE TABLE public.parqueaderos_usuarios (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    parqueadero uuid,
    usuario uuid,
    fecha_inicio timestamp without time zone,
    fecha_final timestamp without time zone
);
 )   DROP TABLE public.parqueaderos_usuarios;
       public         heap    postgres    false            �            1259    16712    precios    TABLE     "  CREATE TABLE public.precios (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    tipo_vehiculo smallint,
    hora_inicial timestamp without time zone,
    precio_hora_inicial double precision,
    hora_siguiente timestamp without time zone,
    precio_hora_siguiente double precision
);
    DROP TABLE public.precios;
       public         heap    postgres    false            �            1259    16762    usuarios    TABLE     3  CREATE TABLE public.usuarios (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre_completo character varying(60),
    telefono character varying(15),
    cedula character varying(12),
    rol smallint,
    correo character varying(40),
    contrasenia character varying(60),
    estado boolean
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16751    vehiculos_parqueados    TABLE       CREATE TABLE public.vehiculos_parqueados (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    parqueadero uuid,
    tipo_vehiculo smallint,
    placa character varying(6),
    fecha_ingreso timestamp without time zone,
    fecha_salida timestamp without time zone
);
 (   DROP TABLE public.vehiculos_parqueados;
       public         heap    postgres    false            C          0    16706    empresas 
   TABLE DATA           E   COPY public.empresas (uuid, nombre, direccion, telefono) FROM stdin;
    public          postgres    false    209   (       F          0    16729    parametrizacion_vehiculo 
   TABLE DATA           [   COPY public.parametrizacion_vehiculo (uuid, parqueadero, tipo_vehiculo, cupos) FROM stdin;
    public          postgres    false    212    (       E          0    16718    parqueaderos 
   TABLE DATA           R   COPY public.parqueaderos (uuid, empresa, nombre, direccion, telefono) FROM stdin;
    public          postgres    false    211   =(       I          0    16768    parqueaderos_usuarios 
   TABLE DATA           f   COPY public.parqueaderos_usuarios (uuid, parqueadero, usuario, fecha_inicio, fecha_final) FROM stdin;
    public          postgres    false    215   Z(       D          0    16712    precios 
   TABLE DATA           �   COPY public.precios (uuid, tipo_vehiculo, hora_inicial, precio_hora_inicial, hora_siguiente, precio_hora_siguiente) FROM stdin;
    public          postgres    false    210   w(       H          0    16762    usuarios 
   TABLE DATA           m   COPY public.usuarios (uuid, nombre_completo, telefono, cedula, rol, correo, contrasenia, estado) FROM stdin;
    public          postgres    false    214   �(       G          0    16751    vehiculos_parqueados 
   TABLE DATA           t   COPY public.vehiculos_parqueados (uuid, parqueadero, tipo_vehiculo, placa, fecha_ingreso, fecha_salida) FROM stdin;
    public          postgres    false    213   *       �           2606    16711    empresas empresas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (uuid);
 @   ALTER TABLE ONLY public.empresas DROP CONSTRAINT empresas_pkey;
       public            postgres    false    209            �           2606    16734 6   parametrizacion_vehiculo parametrizacion_vehiculo_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.parametrizacion_vehiculo
    ADD CONSTRAINT parametrizacion_vehiculo_pkey PRIMARY KEY (uuid);
 `   ALTER TABLE ONLY public.parametrizacion_vehiculo DROP CONSTRAINT parametrizacion_vehiculo_pkey;
       public            postgres    false    212            �           2606    16723    parqueaderos parqueaderos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.parqueaderos
    ADD CONSTRAINT parqueaderos_pkey PRIMARY KEY (uuid);
 H   ALTER TABLE ONLY public.parqueaderos DROP CONSTRAINT parqueaderos_pkey;
       public            postgres    false    211            �           2606    16773 0   parqueaderos_usuarios parqueaderos_usuarios_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.parqueaderos_usuarios
    ADD CONSTRAINT parqueaderos_usuarios_pkey PRIMARY KEY (uuid);
 Z   ALTER TABLE ONLY public.parqueaderos_usuarios DROP CONSTRAINT parqueaderos_usuarios_pkey;
       public            postgres    false    215            �           2606    16717    precios precios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.precios
    ADD CONSTRAINT precios_pkey PRIMARY KEY (uuid);
 >   ALTER TABLE ONLY public.precios DROP CONSTRAINT precios_pkey;
       public            postgres    false    210            �           2606    16767    usuarios usuarios_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (uuid);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    214            �           2606    16756 .   vehiculos_parqueados vehiculos_parqueados_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.vehiculos_parqueados
    ADD CONSTRAINT vehiculos_parqueados_pkey PRIMARY KEY (uuid);
 X   ALTER TABLE ONLY public.vehiculos_parqueados DROP CONSTRAINT vehiculos_parqueados_pkey;
       public            postgres    false    213            �           2606    16735 B   parametrizacion_vehiculo parametrizacion_vehiculo_parqueadero_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parametrizacion_vehiculo
    ADD CONSTRAINT parametrizacion_vehiculo_parqueadero_fkey FOREIGN KEY (parqueadero) REFERENCES public.parqueaderos(uuid);
 l   ALTER TABLE ONLY public.parametrizacion_vehiculo DROP CONSTRAINT parametrizacion_vehiculo_parqueadero_fkey;
       public          postgres    false    3242    211    212            �           2606    16724 &   parqueaderos parqueaderos_empresa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parqueaderos
    ADD CONSTRAINT parqueaderos_empresa_fkey FOREIGN KEY (empresa) REFERENCES public.empresas(uuid);
 P   ALTER TABLE ONLY public.parqueaderos DROP CONSTRAINT parqueaderos_empresa_fkey;
       public          postgres    false    209    3238    211            �           2606    16774 <   parqueaderos_usuarios parqueaderos_usuarios_parqueadero_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parqueaderos_usuarios
    ADD CONSTRAINT parqueaderos_usuarios_parqueadero_fkey FOREIGN KEY (parqueadero) REFERENCES public.parqueaderos(uuid);
 f   ALTER TABLE ONLY public.parqueaderos_usuarios DROP CONSTRAINT parqueaderos_usuarios_parqueadero_fkey;
       public          postgres    false    211    3242    215            �           2606    16779 8   parqueaderos_usuarios parqueaderos_usuarios_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parqueaderos_usuarios
    ADD CONSTRAINT parqueaderos_usuarios_usuario_fkey FOREIGN KEY (usuario) REFERENCES public.usuarios(uuid);
 b   ALTER TABLE ONLY public.parqueaderos_usuarios DROP CONSTRAINT parqueaderos_usuarios_usuario_fkey;
       public          postgres    false    214    215    3248            �           2606    16757 :   vehiculos_parqueados vehiculos_parqueados_parqueadero_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vehiculos_parqueados
    ADD CONSTRAINT vehiculos_parqueados_parqueadero_fkey FOREIGN KEY (parqueadero) REFERENCES public.parqueaderos(uuid);
 d   ALTER TABLE ONLY public.vehiculos_parqueados DROP CONSTRAINT vehiculos_parqueados_parqueadero_fkey;
       public          postgres    false    211    3242    213            C      x������ � �      F      x������ � �      E      x������ � �      I      x������ � �      D      x������ � �      H   x  x���=W�@ �����C�{�n	1�B�Y�sl��H u���~7ۮE�ۼ�9�V���b�UZ���HQ�"��4(U�~Pu�('��(@"�%�2@�W?�V����`����Z�����#¦�7&��}�ߏo4��ק/�85�[���z#T�P���i
(�(���X-���Hߙ�St���>�~��i�yX��@��w�|t��W��a�h���y���9w6A�����	(��+���h.�����(7l�ҥ���O_�ŕ�q��T�l\�c�|Qu��,s�P��_j֔��"Va#\��! #h 4�Wk*����j{nMo3?_��v�=��(j�*stK��������r�x=���d�v��      G      x������ � �     