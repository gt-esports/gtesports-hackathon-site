import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import type { Profile } from '../../types/database.types';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentUser: Profile;
    onUpdate: () => void;
}

export default function EditProfileModal({ isOpen, onClose, currentUser, onUpdate }: EditProfileModalProps) {
    const [firstName, setFirstName] = useState(currentUser?.first_name || '');
    const [lastName, setLastName] = useState(currentUser?.last_name || '');
    const [college, setCollege] = useState(currentUser?.college || '');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && currentUser) {
            setFirstName(currentUser.first_name || '');
            setLastName(currentUser.last_name || '');
            setCollege(currentUser.college || '');
        }
    }, [isOpen, currentUser]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    first_name: firstName,
                    last_name: lastName,
                    full_name: `${firstName} ${lastName}`.trim(),
                    college: college,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', currentUser.id);

            if (error) throw error;

            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-valley-cream rounded-xl border-4 border-valley-brown max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-8">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-pixel text-valley-brown">Edit Profile</h2>
                        <button
                            onClick={onClose}
                            className="text-valley-brown hover:text-valley-gold text-3xl font-bold leading-none transition-colors"
                        >
                            ✖️
                        </button>
                    </div>

                    {/* Edit Form */}
                    <form onSubmit={handleSave} className="space-y-6">

                        {/* First Name */}
                        <div>
                            <label className="block font-pixel text-valley-brown text-sm mb-2">
                                First Name:
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                                placeholder="First Name"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block font-pixel text-valley-brown text-sm mb-2">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                                placeholder="Last Name"
                                required
                            />
                        </div>

                        {/* University */}
                        <div>
                            <label className="block font-pixel text-valley-brown text-sm mb-2">
                                University:
                            </label>
                            <input
                                type="text"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                                placeholder="Your University"
                                required
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-pixel flex-1 text-sm bg-valley-green hover:bg-valley-blue text-white disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : '💾 Save Changes'}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={loading}
                                className="btn-pixel flex-1 text-sm bg-red-500 hover:bg-red-600 text-white disabled:opacity-50"
                            >
                                ❌ Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
