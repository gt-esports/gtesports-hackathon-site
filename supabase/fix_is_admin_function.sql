-- Fix for "Function Search Path Mutable" security issue
-- This function was flagged for having a mutable search_path.
-- We explicitly set it to 'public' to prevent search_path hijacking.
-- Note: This assumes the function signature is is_admin() with no arguments.
-- If the function takes arguments, please update the signature below.

ALTER FUNCTION public.is_admin() SET search_path = public;
